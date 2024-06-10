/*
    * Separa la responsabilidad del router y del controlador.
*/ 

import { Request, Response } from 'express';
import { LoggerService } from '../../infrastructure';

export class LoggerController {
    
    // DI
    constructor(
      public readonly loggerService: LoggerService,
    ){}

    // Controladores
    public saveLog =  (req: Request, res: Response) => {
      res.json({ message: 'saveLog' });
    }

    public getLogs = (req: Request, res: Response) => {
      res.json({ message: 'getLogs' });

    }
}