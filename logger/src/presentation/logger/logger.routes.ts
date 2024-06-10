
import { Router } from 'express';
import { LoggerController } from './logger.controller';
import { LoggerService } from '../../infrastructure';
export class LoggerRoutes {
   static get routes(): Router {
      const loggerRouter = Router();
      const loggerService = new LoggerService();
      const loggerController = new LoggerController(loggerService);

      //* Rutas
      loggerRouter.post( '/', loggerController.saveLog )
      loggerRouter.get(  '/', loggerController.getLogs )

      return loggerRouter;
   }
}