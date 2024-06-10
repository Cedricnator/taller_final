
import { Router } from 'express';
import { LoggerController } from './logger.controller';
import { LoggerService, MongoLogDataSourceImpl, MongoLogRepositoryImpl } from '../../infrastructure';
export class LoggerRoutes {
   static get routes(): Router {
      const loggerRouter       = Router();
      const mongoLogDatasource = new MongoLogDataSourceImpl();
      const mongoLogRepository = new MongoLogRepositoryImpl( mongoLogDatasource );
      const loggerService      = new LoggerService( mongoLogRepository );
      const loggerController   = new LoggerController( loggerService );

      //* Rutas
      loggerRouter.post( '/', loggerController.saveLog )
      loggerRouter.get(  '/', loggerController.getLogs )

      return loggerRouter;
   }
}