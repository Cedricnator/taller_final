import { CustomError } from "../../errors/custom.error";

export class ProductEntity{

   constructor(
      public readonly id:          number,
      public readonly name:        string,
      public readonly description: string,
      public readonly price:       number,
      public readonly createdAt:   Date,
      public readonly updatedAt:   Date,
      public readonly userId:      number,
      public readonly categoryId:  number,
      public readonly stock?:      number,
      public readonly img?:        string,
   ){
      this.id          = id;
      this.name        = name;
      this.description = description;
      this.price       = price;
      this.createdAt   = createdAt;
      this.updatedAt   = updatedAt;
      this.userId      = userId;
      this.categoryId  = categoryId;
      this.stock       = stock;
      this.img         = img;
   }

   static fromObject(object: { [key:string]:any }){
      const { 
         id, 
         name, 
         description,  
         price,
         createdAt, 
         updatedAt,
         userId,
         categoryId,
      } = object;

      if( !id ){
         throw CustomError.badRequest('Missing id');
      }
      if( !name ){
         throw CustomError.badRequest('Missing name');
      }
      if( !description ){
         throw CustomError.badRequest('Missing description');
      }
      if( !price ){
         throw CustomError.badRequest('Missing price');
      }
      if( !createdAt ){
         throw CustomError.badRequest('Missing created_at');
      }
      if( !updatedAt ){
         throw CustomError.badRequest('Missing updated_at');
      }
      if( !userId ){
         throw CustomError.badRequest('Missing userId');

      }
      if( !categoryId ){
         throw CustomError.badRequest('Missing categoryId');
      }

      return new ProductEntity( 
         id, 
         name, 
         description,  
         price,
         createdAt, 
         updatedAt,
         userId,
         categoryId,
      )
   }
}