//* Enrutador global, todas las rutas estan aqui

import { Router }         from 'express';
import { AuthRoutes }     from './auth';
import { RoutesCategory } from './category';
import { RoutesProduct }  from './product';

export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas
        appRouter.use( '/api/v1/auth',     AuthRoutes.routes     );
        appRouter.use( '/api/v1/category', RoutesCategory.routes );
        appRouter.use( '/api/v1/product',  RoutesProduct.routes  );

        return appRouter;
    }
}