import { NextFunction, Request, Response } from 'express';
import { JwtAdapter, envs } from '../../adapters';


export class AuthMiddleware {
   private readonly jwtAdapter:  JwtAdapter;
   constructor(){
     this.jwtAdapter = new JwtAdapter(envs.JWT_SEED);
     this.validateJWT = this.validateJWT.bind(this);
   }

   async validateJWT( req: Request, res: Response, next: NextFunction ){
      const authorization = req.header('Authorization');
      if( !authorization ) return res.status(401).json({ error: 'No token provided' });
      if( !authorization.startsWith('Bearer ')) return res.status(401).json({
         error: 'Invalid Bearer Token'
      })

      const token = authorization.split(' ').at(1) || '';
      if(!token) res.status(401).json({ error: 'No token provided' });

      try {
         const payload = await this.jwtAdapter.validateToken(token);
         if( !payload ) return res.status(401).json({ error: 'Invalid Token' });
         req.body.auth = payload;
         next();
      } catch (error) {
         // TODO: Implementar un logger, como winston o implementar un microservicio para ello.
         console.log(error);
         res.status(500).json({ error: 'Internal Server Error' })
      }
   }

}