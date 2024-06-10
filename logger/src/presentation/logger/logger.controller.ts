/*
  * Separa la responsabilidad del router y del controlador.
*/ 

import { Request, Response } from 'express';
import { LoggerService } from '../../infrastructure';
import { handleError } from '../error';

export class LoggerController {
    
    // DI
    constructor(
      public readonly loggerService: LoggerService,
    ){}

    // Controladores
    public saveLog =  (req: Request, res: Response) => {
      this.loggerService.saveLog()
                        .then((log) => res.json(log))
                        .catch((err) => handleError(err, res));
    }

    public getLogs = (req: Request, res: Response) => {
      this.loggerService.getLogs()
                        .then((logs) => res.json(logs))
                        .catch((err) => handleError(err, res));
    }
}