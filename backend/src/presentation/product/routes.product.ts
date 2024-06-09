//* Se encarga de manejar las rutas de la entidad
import { Router }            from 'express';
import { ControllerProduct } from './controller.product';
import { ProductService } from '../../infrastructure';

export class RoutesProduct {
    static get routes(): Router {
        const router         =  Router();
        const productService = new ProductService();
        const controller     = new ControllerProduct(productService);

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/create'    , controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}