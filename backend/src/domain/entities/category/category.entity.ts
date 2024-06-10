import { CustomError } from "../../errors/custom.error";

export class CategoryEntity{

   constructor(
      public readonly id:        number,
      public readonly name:      string,
      public readonly available: boolean,
      public readonly createdAt: Date,
      public readonly updatedAt: Date
   ){
      this.id        = id;
      this.name      = name;
      this.available = available;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
   }

   static fromObject(object: { [key:string]:any }){
      const { 
         id, 
         name, 
         available,  
         createdAt, 
         updatedAt,
      } = object;

      if( !id ){
         throw CustomError.badRequest('Missing id');
      }
      if( !name ){
         throw CustomError.badRequest('Missing name');
      }
      if( !available ){
         throw CustomError.badRequest('Missing available');
      }
      if( !createdAt ){
         throw CustomError.badRequest('Missing created_at');
      }
      if( !updatedAt ){
         throw CustomError.badRequest('Missing updated_at');
      }

      return new CategoryEntity( 
         id, 
         name, 
         available, 
         createdAt, 
         updatedAt,  
      )
   }
}