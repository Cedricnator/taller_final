import type { UploadedFile } from 'express-fileupload'
import path from 'path';
import fs from 'fs'
export class FileUploadService {
   constructor(){}

   private checkFolder( folderPath: string ){
      if ( !fs.existsSync(folderPath) ){
         fs.mkdirSync(folderPath);
      }
   }

   uploadSingle = async (
      file: UploadedFile,
      folder: string =  'uploads',
      validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']
   ) => {
      try {
         const fileExtension  = file.mimetype.split('/').at(1);
         if( fileExtension && !validExtensions.includes(fileExtension) ) throw new Error('Invalid file extension');
         const destination    = path.resolve( __dirname, '../../../../', folder )
         this.checkFolder(destination)
         return file.mv(destination + `/mi-image.${fileExtension}`)
      } catch (error) {
         console.log(error);         
      }
   }

   uploadMultiple = async (

   ) => {
      throw new Error('not implemented')
   }

}