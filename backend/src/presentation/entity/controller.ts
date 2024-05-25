//* Separa la responsabilidad del router y del controlador

import { Request, Response } from 'express';

export class Controller {
    
    // DI
    constructor(){}

    // Controladores
    public getAll = async(req: Request, res: Response) => {}
    public getOneById = async(req: Request, res: Response) => {}
    public createOne = async(req: Request, res: Response) => {}
    public updateOne = async(req: Request, res: Response) => {}
    public deleteOne = async(req: Request, res: Response) => {}

}