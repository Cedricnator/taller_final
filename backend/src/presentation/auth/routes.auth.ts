//* Enrutador global, todas las rutas estan aqui

import { Router }                     from 'express';
import { AuthController }             from './controller.auth';
import { envs, JwtAdapter }           from '../../adapters';
import { AuthService, EmailService, UserDataSourceImpl, UserRepositoryImpl }  from '../../infrastructure';
import { BcryptAdapter } from '../../adapters/bcryp.adapter';

export class AuthRoutes {
   static get routes(): Router {
      const router         = Router();
      const bcryptAdapter  = new BcryptAdapter();
      const dataSource     = new UserDataSourceImpl();
      const userRepository = new UserRepositoryImpl(dataSource);
      const jwtAdapter     = new JwtAdapter(envs.JWT_SEED);
      
      const emailService   = new EmailService({
         emailService:        envs.MAILER_SERVICE, 
         mailerEmail:         envs.MAILER_EMAIL, 
         senderEmailPassword: envs.MAILER_SECRET_KEY
      });

      const authService    = new AuthService(
         userRepository,
         emailService, 
         jwtAdapter,
         bcryptAdapter,
         envs.WEBSERVICE_URL, 
      );
      const authController = new AuthController(authService);

      //* Rutas
      router.post('/login', authController.login);
      router.post('/register', authController.register);
      router.get('/validate-email/:token', authController.validateEmail);
      return router;
   }
}