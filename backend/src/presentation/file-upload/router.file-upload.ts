//* Se encarga de manejar las rutas de la entidad
import { Router }            from 'express';
import { ControllerFileUpload } from './controller.file-upload';

export class RoutesFileUpload {
    static get routes(): Router {
        const router         =  Router();
        const controller     = new ControllerFileUpload();

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/create'    , controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}