import { regularExps } from "../../../adapters";

export class LoginUserDto {
   private constructor(
      public readonly email:    string,
      public readonly password: string,
   ){}

   static create( object: { [key: string]: any}): [string?, LoginUserDto?]{
      const { email, password } = object;
      if( !email ){
         return ['Missing email'];
      }
      if( typeof email !== 'string' ){
         return ['Email must be a string'];
      }
      if( !regularExps.email.test(email)){
         return ['Invalid email format'];
      }
      if( !password ){
         return ['Missing password'];
      }
      if( password.length < 6 ){
         return ['The password must be at least 6 characters long'];
      }
      return [undefined, new LoginUserDto(email, password)];
   }
}