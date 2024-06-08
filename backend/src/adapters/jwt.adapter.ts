import jwt from 'jsonwebtoken'
import { envs } from './envs.adapter';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {

   //TODO: Declarar el JWT_SEED en el constructor para no crear una dependencia oculta

   static async generateToken(payload: any, duration: string = '2h'){
      return new Promise((resolve) => {
         jwt.sign( payload, "SEED", { expiresIn: duration }, (err, token) => {
            if (err) return resolve(null);
            resolve(token);
         })
      })           
   }

   static validateToken(token: string): boolean{
      throw new Error('Not implemented yet');
   }



}