//* Se encarga de manejar las rutas de la entidad
import { Controller }      from './controller';
import { Router }          from "express";

export class Routes {
    static get routes(): Router {
        const router     =  Router();
        const controller = new Controller();

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/'    , controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}