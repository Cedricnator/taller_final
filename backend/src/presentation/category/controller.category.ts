//* Separa la responsabilidad del router y del controlador

import { Request, Response } from 'express';
import { CreateCategoryDto } from '../../domain';
import { CategoryService } from '../../infrastructure';
import { handleError } from '../error';

export class ControllerCategory {
    
    // DI
    constructor(
        public readonly categoryService: CategoryService,
    ){}

    // Controladores
    public createOne = async (req: Request, res: Response) => {
        const [error, createCategoryDto ] = CreateCategoryDto.create(req.body);
        if(error) return res.status(400).json({ message: error });
        await this.categoryService
            .createOneCategory(createCategoryDto!, req.body.user )
            .then( (category) => res.json(category) )
            .catch( (error) => handleError(error, res) );
    }

    public getAll = (req: Request, res: Response) => {
        this.categoryService.getCategories()
            .then( (categories) => res.json(categories) )
            .catch( (error) => handleError(error, res) );
    }

    public getOneById = (req: Request, res: Response) => {
        res.json({message: 'getOneById'});
    }

    public updateOne = (req: Request, res: Response) => {
        res.json({message: 'updateOne'});
    }

    public deleteOne = (req: Request, res: Response) => {
        res.json({message: 'deleteOne'});
    }

}