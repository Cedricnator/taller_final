//* Se encarga de manejar las rutas de la entidad
import { Router }            from 'express';
import { ControllerFileUpload } from './controller.file-upload';
import { FileUploadService } from '../../infrastructure';

export class RoutesFileUpload {
    static get routes(): Router {
        const router            =  Router();
        const fileUploadService = new FileUploadService();
        const controller        = new ControllerFileUpload(fileUploadService);

        router.get( '/single/:type'    , controller.uploadFile          );
        router.get( '/multiple/:type'  , controller.uploadMultipleFiles );

        return router;
    }
}