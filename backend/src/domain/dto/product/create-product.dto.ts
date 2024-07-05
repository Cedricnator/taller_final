import { regularExps } from "../../../adapters";

export class CreateProductDto {
   private constructor(
      public readonly name:        string,
      public readonly description: string,
      public readonly price:       number,
      public readonly stock:       number,
      public readonly userId:      number,
      public readonly categoryId:  number,
   ){}

   static create( object: { [key: string]: any}): [string?, CreateProductDto?]{
      const { name, description, price, stock, userId, categoryId } = object;

      if( !name){
         return ['Missing name'];
      }
      if( typeof name !== 'string' ){
         return ['Name must be a string'];
      }
      if( !description){
         return ['Missing description'];
      }
      if( typeof name !== 'string' ){
         return ['Name must be a string'];
      }
      if( !price){
         return ['Missing price'];
      }
      if( typeof price !== 'number' ){
         return ['Price must be a number'];
      }
      if( !userId){
         return ['Missing userId'];
      }
      if( typeof userId !== 'number' ){
         return ['UserId must be a number'];
      }
      if( !categoryId){
         return ['Missing categoryId'];
      }
      if( typeof categoryId !== 'number'){
         return ['CategoryId must be a number'];
      }

      // Retorna si hay error, sino es undefiend, y el objeto CreateProductDto, que si es correcto, lo devuelve.
      return [undefined, new CreateProductDto(name, description, price, stock, userId, categoryId)];
   }
}