//* Enrutador global, todas las rutas estan aqui

import { Router }           from 'express';
export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas
        // appRouter.use( '/api/v1/auth',        AuthRoutes.routes       );
        return appRouter;
    }
}