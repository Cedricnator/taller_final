import type { UploadedFile } from 'express-fileupload'
import path from 'path';
import fs from 'fs'
import { Uuid } from '../../../adapters';
import { CustomError } from '../../../domain';
export class FileUploadService {
   constructor(
      private readonly uuid = Uuid.v4,
   ){}

   private checkFolder( folderPath: string ){
      if ( !fs.existsSync(folderPath) ){
         fs.mkdirSync(folderPath);
      }
   }

   uploadSingle = async (
      file: UploadedFile,
      folder: string = 'uploads',
      validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']
   ) => {
      try {
         const fileExtension  = file.mimetype.split('/').at(1);
         if( fileExtension && !validExtensions.includes(fileExtension) ){
            CustomError.badRequest(
               `The file extension: ${fileExtension} is a Invalid file extension. 
               Valid extensions are: ${validExtensions.join(', ')}`
            );
         }
         const destination    = path.resolve( __dirname, '../../../../', folder )
         this.checkFolder(destination)
         const fileName = `${ this.uuid() }.${fileExtension}`
         file.mv(`${ destination }/${ fileName }`)
         return { fileName }
      
      } catch (error) {
         console.log(error);
         throw error
      }
   }

   uploadMultiple = async (

   ) => {
      throw new Error('not implemented')
   }

}