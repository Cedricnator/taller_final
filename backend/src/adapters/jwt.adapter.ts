import jwt from 'jsonwebtoken'


export class JwtAdapter {
   private JWT_SEED: string;

   constructor(
      JWT_SEED: string
   ){
      this.JWT_SEED = JWT_SEED;
   }

   public async generateToken(payload: any, duration: string = '2h'){
      return new Promise((resolve) => {
         jwt.sign( payload, `${this.JWT_SEED}`, { expiresIn: duration }, (err, token) => {
            if (err) return resolve(null);
            resolve(token);
         })
      })           
   }

   public async validateToken<T>(token: string): Promise<T | null> {
      return new Promise((resolve) => {
         jwt.verify(token,`${this.JWT_SEED}`, (err, decoded) => {
            if (err) return resolve(null);
            resolve(decoded as T);
         })
      })
   }
}