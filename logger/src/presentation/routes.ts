//* Enrutador global, todas las rutas estan aqui

import { Router }           from 'express';
import { LoggerRoutes } from './logger/logger.routes';
export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas
        appRouter.use( '/api/v1/logger', LoggerRoutes.routes );
        
        return appRouter;
    }
}