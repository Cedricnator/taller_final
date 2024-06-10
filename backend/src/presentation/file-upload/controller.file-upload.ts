/*
    * Separa la responsabilidad del router y del controlador.
*/ 

import { Request, Response } from 'express';
import { FileUploadService } from '../../infrastructure';
import { handleError } from '../error';
// import { handleError } from '../error';

export class ControllerFileUpload {
    
    // DI
    constructor(
         public readonly fileUploadService: FileUploadService,
    ){}

    // Controladores
    public uploadFile =  (req: Request, res: Response) => {
      this.fileUploadService.uploadSingle()
        .then()
        .catch()
    }

    public uploadMultipleFiles = (req: Request, res: Response) => {
      this.fileUploadService
        .uploadMultiple()
        .then()
        .catch( error => handleError(error, res))
    }
}