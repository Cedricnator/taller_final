/*
    * Separa la responsabilidad del router y del controlador.
*/ 

import { Request, Response } from 'express';
import { FileUploadService } from '../../infrastructure';
import { handleError } from '../error';
import { UploadedFile } from 'express-fileupload';
import { error } from 'console';
import { CustomError } from '../../domain';
// import { handleError } from '../error';

export class ControllerFileUpload {
    
    // DI
    constructor(
      public readonly fileUploadService: FileUploadService,
    ){}

    // Controladores
    public uploadFile =  (req: Request, res: Response) => {
   
      const validFolders = ['users','category', 'products'];
      const folder = req.params.type as string;
      if(!validFolders.includes(folder)){ 
        res
          .status(400)
          .json({ msg: 'Invalid folder name, only is permited users, category and products as folders.' });
      }

      const file = req.body.files.at(0) as UploadedFile;

      this.fileUploadService.uploadSingle(file, `uploads/${folder}`)
        .then( uploaded  => res.json(uploaded))
        .catch( error => handleError(error, res));
    
    }

    public uploadMultipleFiles = (req: Request, res: Response) => {
      this.fileUploadService
        .uploadMultiple()
        .then()
        .catch( error => handleError(error, res));
    }
}