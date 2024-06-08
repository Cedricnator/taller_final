import { CustomError, RegisterUserDto, UserEntity, LoginUserDto } from "../../../domain";
import { BcryptAdapter, JwtAdapter } from '../../../adapters';
import { EmailService }              from "./email.service";
import { PrismaClient }              from "@prisma/client";

export class AuthService {
   private prisma = new PrismaClient();
   private bcrypt = new BcryptAdapter();
   private WEB_SERVICE_URL: string;

   constructor(
      public readonly emailService: EmailService,
      public readonly webServiceUrl: string
   ) {
      this.WEB_SERVICE_URL = webServiceUrl;
   }

   private sendEmailValidationLink = async (email: string) => {
      const token = await JwtAdapter.generateToken({ email });
      if (!token) throw CustomError.internalServer('Error while creating token');
      const link = `${this.WEB_SERVICE_URL}/auth/validate-email/${token}`;
      const html = `
            <h1>Validate your email</h1>
            <p>Click on the following link to validate your email</p>
            <a href="${link}">Validate your email: ${email}</a>
         `;

      const options = {
         to: email,
         subject: 'Validate your email',
         htmlBody: html
      }

      const isSet = await this.emailService.sendEmail(options);
      if (!isSet) throw CustomError.internalServer(`Error sending email`);
      return true;
   }

   public async registerUser(registerUserDto: RegisterUserDto) {
      const existsUser = await this.prisma.user.findFirst({
         where: {
            email: registerUserDto.email
         }
      })

      if (existsUser) throw CustomError.badRequest('User already exists');

      try {
         const hashedPassword = this.bcrypt.hash(registerUserDto.password);

         const user = await this.prisma.user.create({
            data: {
               name: registerUserDto.name,
               email: registerUserDto.email,
               password: hashedPassword
            }
         });

         // Email de confirmación
         await this.sendEmailValidationLink(user.email);

         const { password, ...userEntity } = UserEntity.fromObject(user)

         return {
            user: { ...userEntity }
         };

      } catch (error) {
         throw CustomError.internalServer(`Error: ${error}`);
      }
   }

   public async loginUser(loginUserDto: LoginUserDto) {
      const user = await this.prisma.user.findFirst({
         where: {
            email: loginUserDto.email
         }
      })
      if (!user) throw CustomError.badRequest(`User with ${loginUserDto.email} not found`);
      try {
         const isValidPassword = this.bcrypt.compare(loginUserDto.password, user.password);
         if (!isValidPassword) throw CustomError.badRequest('Invalid password');
         const token = await JwtAdapter.generateToken({ id: user.id, name: user.name });
         if (!token) throw CustomError.internalServer("Error while creating JWT");
         return {
            token: token
         }
      } catch (error) {
         throw CustomError.internalServer(`Error: ${error}`);
      }
   }
}