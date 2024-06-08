//* Enrutador global, todas las rutas estan aqui

import { Router } from 'express';
import { Routes } from './entity';
import { AuthRoutes } from './auth/routes.auth';

export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas
        appRouter.use( '/api/v1/auth', AuthRoutes.routes );
        appRouter.use( '/api/v1/entity', Routes.routes );

        return appRouter;
    }
}