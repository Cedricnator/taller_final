// TODO: USAR UN ENUM PARA LOS ROLES

import { CustomError } from "../../errors/custom.error";

export class UserEntity {
   constructor(
      public id:             number,
      public name:           string,
      public email:          string,
      public emailValdiated: boolean,
      public password:       string,
      public createdAt:      Date,
      public updatedAt:      Date,
      public role:           string[],
      public img?:           string,
   ){}

   static fromObject(object: { [key:string]:any }){
      const { 
         id, 
         name, 
         email, 
         emailValdiated, 
         password, 
         createdAt, 
         updatedAt, 
         role, 
         img 
      } = object;

      if( !id ){
         throw CustomError.badRequest('Missing id');
      }
      if( !name ){
         throw CustomError.badRequest('Missing name');
      }
      if( !email ){
         throw CustomError.badRequest('Missing email');
      }
      if( emailValdiated === undefined ){
         throw CustomError.badRequest('Missing emailValidated');
      }
      if( !password ){
         throw CustomError.badRequest('Missing password');
      }
      if( !createdAt ){
         throw CustomError.badRequest('Missing created_at');
      }
      if( !updatedAt ){
         throw CustomError.badRequest('Missing updated_at');
      }
      if(!role){
         throw CustomError.badRequest('Missing role');
      }
      
      return new UserEntity( 
         id, 
         name, 
         email, 
         emailValdiated, 
         password, 
         createdAt, 
         updatedAt, 
         role, 
         img 
      )
   }
}