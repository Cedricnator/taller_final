/*
    * Separa la responsabilidad del router y del controlador.
*/ 

import { Request, Response } from 'express';
import { PaginationDto, CreateProductDto } from '../../domain';
import { ProductService } from '../../infrastructure';
import { handleError } from '../error';

export class ControllerProduct {
    
    // DI
    constructor(
        public readonly productService: ProductService,
    ){}

    // Controladores
    public createOne =  (req: Request, res: Response) => {
        const [ error, createProductDto ] = CreateProductDto.create( req.body );
        if(error) return res.status(400).json({ message: error });
        this.productService
            .createOneProduct(createProductDto!)
            .then( (product) => res.json(product) )
            .catch( (error) => handleError(error, res) );
    }

    public getAll = (req: Request, res: Response) => {
        // Para obtener los query, lo podremos extraer del req.query.
        // En postman estos corresponden a los parametros.
        const { page = 1, limit = 10 } = req.query;
        const [error, paginationDto] = PaginationDto.create( +page, +limit)
        if(error) return res.status(400).json({ message: error });

        this.productService.getProducts( paginationDto! )
            .then( (products) => res.json(products) )
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