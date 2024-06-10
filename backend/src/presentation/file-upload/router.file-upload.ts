//* Se encarga de manejar las rutas de la entidad
import { Router }            from 'express';
import { ControllerFileUpload } from './controller.file-upload';
import { FileUploadService } from '../../infrastructure';
import { FileUploadMiddleware } from '../middlewares';

export class RoutesFileUpload {
    static get routes(): Router {
        const router            =  Router();
        const fileUploadService = new FileUploadService();
        const controller        = new ControllerFileUpload(fileUploadService);
        router.use( FileUploadMiddleware.containFiles );
        router.post( '/single/:type'    , controller.uploadFile          );
        router.post( '/multiple/:type'  , controller.uploadMultipleFiles );

        return router;
    }
}