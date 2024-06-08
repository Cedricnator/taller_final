//* Se encarga de manejar las rutas de la entidad
import { Router }            from "express";
import { ControllerProduct } from "./controller.product";

export class RoutesProduct {
    static get routes(): Router {
        const router     =  Router();
        const controller = new ControllerProduct();

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/'    , controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}