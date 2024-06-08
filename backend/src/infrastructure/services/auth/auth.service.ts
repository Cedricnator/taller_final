import { CustomError, RegisterUserDto, UserEntity, LoginUserDto, UserRepository } from "../../../domain";
import { BcryptAdapter, JwtAdapter } from '../../../adapters';
import { EmailService }              from "./email.service";
import { PrismaClient }              from "@prisma/client";

export class AuthService {
   private prisma = new PrismaClient();
   private bcrypt = new BcryptAdapter();
   private WEB_SERVICE_URL: string;

   constructor(
      public readonly emailService: EmailService,
      public readonly webServiceUrl: string,
      public readonly jwtAdapter: JwtAdapter,
      private readonly userRepository: UserRepository
   ) {
      this.WEB_SERVICE_URL = webServiceUrl;
   }

   private sendEmailValidationLink = async (email: string) => {
      const token = await this.jwtAdapter.generateToken({ email });
      if (!token) throw CustomError.internalServer('Error while creating token');
      const link = `http://${this.WEB_SERVICE_URL}/auth/validate-email/${token}`;
      console.log(link);
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
      const existsUser = await this.userRepository.isUserFoundByEmail(registerUserDto.email);
      
      if (existsUser) throw CustomError.badRequest('User already exists');

      try {
         const hashedPassword = this.bcrypt.hash(registerUserDto.password);
         registerUserDto = {
            name: registerUserDto.name,
            email: registerUserDto.email,
            password: hashedPassword
         }

         const user = await this.userRepository.saveUser(registerUserDto)

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
      const user = await this.userRepository.findByEmail(loginUserDto.email);
      if (!user) throw CustomError.badRequest(`User with ${loginUserDto.email} not found`);
      try {
         const isValidPassword = this.bcrypt.compare(loginUserDto.password, user.password);
         if (!isValidPassword) throw CustomError.badRequest('Invalid password');
         const token = await this.jwtAdapter.generateToken({ id: user.id, name: user.name });
         if (!token) throw CustomError.internalServer("Error while creating JWT");
         return {
            token: token
         }
      } catch (error) {
         throw CustomError.internalServer(`Error: ${error}`);
      }
   }

   public async validateEmail(token: string) {
      const payload = await this.jwtAdapter.validateToken(token);
      
      if (!payload) throw CustomError.badRequest('Invalid token');
      
      const { email } = payload as { email: string };
      
      if( !email ) throw CustomError.internalServer('Email not in token!!!!');
      
      const user = await this.userRepository.findByEmail(email); 
      
      if(!user) throw CustomError.internalServer('¡¡¡Email not exists in database!!!');
      
      await this.prisma.user.update({
         where: {
            id: user.id
         },
         data: {
            emailValdiated: true
         }
      
      })

      return true;
   }
}