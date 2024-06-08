//* Enrutador global, todas las rutas estan aqui

import { Router } from 'express';
import { AuthController } from './controller.auth';
import { AuthService } from '../services/auth/auth.service';

export class AuthRoutes {
   static get routes(): Router {
      const router         = Router();
      const authService    = new AuthService();
      const authController = new AuthController(authService);

      //* Rutas
      router.post('/login', authController.login);
      router.post('/register', authController.register);
      router.get('/validate-email/:token', authController.validateEmail);
      return router;
   }
}