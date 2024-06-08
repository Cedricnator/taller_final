//* Separa la responsabilidad del router y del controlador

import { Request, Response } from 'express';

export class ControllerProduct {
   
   // DI
   constructor(){}

   // Controladores
   public getAll = async(req: Request, res: Response) => {
      res.json({message: 'getAll'});
   }
   public getOneById = async(req: Request, res: Response) => {
      res.json({message: 'getOneById'})
   }
   public createOne = async(req: Request, res: Response) => {
      res.json({message: 'createOne'})
   }
   public updateOne = async(req: Request, res: Response) => {
      res.json({message: 'updateOne'})
   }
   public deleteOne = async(req: Request, res: Response) => {
      res.json({message: 'deleteOne'})
   }
}