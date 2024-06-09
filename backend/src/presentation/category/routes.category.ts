//* Se encarga de manejar las rutas de la entidad
import { ControllerCategory } from './controller.category';
import { Router }          from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { CategoryService } from '../../infrastructure';

export class RoutesCategory {
    static get routes(): Router {
        const router          = Router();
        const authMiddleware  = new AuthMiddleware();
        const categoryService = new CategoryService();
        const controller      = new ControllerCategory(categoryService);

        router.get(   '/'    , controller.getAll     );
        router.get(   '/:id' , controller.getOneById );
        router.post(  '/create', [ authMiddleware.validateJWT ], controller.createOne  );
        router.put(   '/:id' , controller.updateOne  );
        router.delete('/:id' , controller.deleteOne  );

        return router;
    }
}