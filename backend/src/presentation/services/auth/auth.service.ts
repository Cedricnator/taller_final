import { PrismaClient } from "@prisma/client";
import { CustomError, RegisterUserDto } from "../../../domain";
import { UserEntity } from "../../../domain/entities";
import { BcryptAdapter } from '../../../adapters/bcryp.adapter';
import { LoginUserDto } from '../../../domain/dto/auth/login-user.dto';

export class AuthService {
   private prisma = new PrismaClient();
   private bcrypt = new BcryptAdapter();

   constructor(){

   }

   public async registerUser( registerUserDto: RegisterUserDto ) {
      
      const existsUser = await this.prisma.user.findFirst({
         where: {
            email: registerUserDto.email
         }
      })

      if(existsUser) throw CustomError.badRequest('User already exists');
      
      try {
         const hashedPassword = this.bcrypt.hash(registerUserDto.password);
         
         const user = await this.prisma.user.create({
            data: {
               name:     registerUserDto.name,
               email:    registerUserDto.email,
               password: hashedPassword
            }
         });

         const { password, ...userEntity} = UserEntity.fromObject(user)

         return {
            user: { ...userEntity }
         };

      } catch (error) {
         throw CustomError.internalServer(`Error: ${ error }`);
      }
   }

   public async loginUser( loginUserDto: LoginUserDto): Promise<{token: string}>{
      const user = await this.prisma.user.findFirst({
         where: {
            email: loginUserDto.email
         }
      })
      if(!user) throw CustomError.badRequest(`User with ${ loginUserDto.email } not found`);
      try {
         const isValidPassword = this.bcrypt.compare(loginUserDto.password, user.password );
         if( !isValidPassword ) throw CustomError.badRequest('Invalid password');

         return {
            token: "ABC"
         }
      } catch (error) {
         throw CustomError.internalServer(`Error: ${ error }`);
      }
   }
}