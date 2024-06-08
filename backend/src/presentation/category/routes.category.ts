//* Se encarga de manejar las rutas de la entidad
import { ControllerCategory } from './controller.category';
import { Router }          from "express";

export class RoutesCategory {
    static get routes(): Router {
        const router     =  Router();
        const controller = new ControllerCategory();

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/'    , controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}