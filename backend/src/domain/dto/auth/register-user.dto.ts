import { regularExps } from "../../../adapters";

export class RegisterUserDto {
   private constructor(
      public readonly name:     string,
      public readonly email:    string,
      public readonly password: string,
   ){}

   static create( object: { [key: string]: any}): [string?, RegisterUserDto?]{
      const { name, email, password } = object;

      if( !name ){
         return ['Missing name', undefined];
      }
      if( !regularExps.email.test(email)){
         return ['Missing email'];
      }
      if( !password ){
         return ['Missing password'];
      }
      if( password.length < 6 ){
         return ['The password must be at least 6 characters long'];
      }
      return [undefined, new RegisterUserDto(name, email, password)];
   }
}