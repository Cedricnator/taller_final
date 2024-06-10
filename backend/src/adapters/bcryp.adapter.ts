import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export class BcryptAdapter {
   constructor(){}

   public  hash(password: string){
      const salt = genSaltSync(15);
      return  hashSync(password, salt);
   }

   public compare(password: string, hashed: string){
      return compareSync(password, hashed);
   }
}