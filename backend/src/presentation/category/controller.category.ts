//* Separa la responsabilidad del router y del controlador

import { Request, Response } from 'express';
import { CreateCategoryDto } from '../../domain';

export class ControllerCategory {
    
    // DI
    constructor(){}

    // Controladores
    public createOne = async(req: Request, res: Response) => {
        const [error, createCategoryDto ] = CreateCategoryDto.create(req.body);
        if(error) return res.status(400).json({ message: error });
        res.json(createCategoryDto);
    }

    public getAll = async(req: Request, res: Response) => {
        res.json({message: 'getAll'});
    }

    public getOneById = async(req: Request, res: Response) => {
        res.json({message: 'getOneById'});
    }

    public updateOne = async(req: Request, res: Response) => {
        res.json({message: 'updateOne'});
    }

    public deleteOne = async(req: Request, res: Response) => {
        res.json({message: 'deleteOne'});
    }

}