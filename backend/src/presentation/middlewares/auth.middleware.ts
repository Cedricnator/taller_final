/*
   * Gracias al middleware, podemos interceptar las peticiones y validar si el usuario está autenticado o no.
   * Ademas de esto, podemos inyectar el usuario en la petición para que los controladores puedan acceder a él.
   * De este modo, nuestras entidades que estan vinculadas con el usuario, pueden ser creadas, actualizadas o eliminadas
   * Solo es necesario, llamar este middleware en las rutas que necesiten autenticación.
*/

import { NextFunction, Request, Response } from 'express';
import { JwtAdapter, envs } from '../../adapters';
import { prisma } from '../../data';
import { UserEntity } from '../../domain';

// TODO: DESACOPLAR PRISMA DE ESTE MIDDLEWARE

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
         const payload = await this.jwtAdapter.validateToken<{ id: number }>(token);
         if( !payload ) return res.status(401).json({ error: 'Invalid Token' });
         const user = await prisma.user.findUnique({
            where: {
               id: payload.id
            }
         })

         if( !user ) return res.status(401).json({ error: 'Invalid Token, the user is not found by the token' });

         req.body.user = UserEntity.fromObject(user);
         next();
      } catch (error) {
         // TODO: Implementar un logger, como winston o implementar un microservicio para ello.
         console.log(error);
         res.status(500).json({ error: 'Internal Server Error' })
      }
   }

}