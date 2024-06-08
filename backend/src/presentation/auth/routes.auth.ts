//* Enrutador global, todas las rutas estan aqui

import { Router }                     from 'express';
import { AuthController }             from './controller.auth';
import { envs, JwtAdapter }           from '../../adapters';
import { AuthService, EmailService }  from '../../infrastructure';

export class AuthRoutes {
   static get routes(): Router {
      const router         = Router();
      const jwtAdapter     = new JwtAdapter(envs.JWT_SEED)
      const emailService   = new EmailService({
         emailService:        envs.MAILER_SERVICE, 
         mailerEmail:         envs.MAILER_EMAIL, 
         senderEmailPassword: envs.MAILER_SECRET_KEY
      });
      const authService    = new AuthService(emailService, envs.WEBSERVICE_URL, jwtAdapter);
      const authController = new AuthController(authService);

      //* Rutas
      router.post('/login', authController.login);
      router.post('/register', authController.register);
      router.get('/validate-email/:token', authController.validateEmail);
      return router;
   }
}