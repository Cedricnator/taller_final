//* Enrutador global, todas las rutas estan aqui

import { Router } from 'express';
import { Routes } from './entity';

export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas
        appRouter.use( '/api/v1/entity', Routes.routes );

        return appRouter;
    }
}