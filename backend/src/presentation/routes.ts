//* Archivo de rutas que maneja mi aplicación
//* Es un enrutador global, todas las rutas estan aqui

import { Router } from 'express';

export class AppRoutes {
    static get routes(): Router {
        const appRouter = Router();

        //* Rutas

        return appRouter;
    }
}