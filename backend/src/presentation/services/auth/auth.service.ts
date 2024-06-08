import { PrismaClient } from "@prisma/client";
import { CustomError, RegisterUserDto } from "../../../domain";
import { UserEntity } from "../../../domain/entities";

export class AuthService {
   private prisma = new PrismaClient();
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
         const user = await this.prisma.user.create({
            data: {
               name:     registerUserDto.name,
               email:    registerUserDto.email,
               password: registerUserDto.password
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

   public loginUser(){

   }
   

}