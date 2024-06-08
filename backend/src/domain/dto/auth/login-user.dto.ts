import { regularExps } from "../../../adapters";

export class LoginUserDto {
   private constructor(
      public readonly email:    string,
      public readonly password: string,
   ){}

   static create( object: { [key: string]: any}): [string?, LoginUserDto?]{
      const { email, password } = object;

      if( !regularExps.email.test(email)){
         return ['Missing email'];
      }
      if( !password ){
         return ['Missing password'];
      }
      if( password.length < 6 ){
         return ['Missing password'];
      }
      return [undefined, new LoginUserDto(email, password)];
   }
}