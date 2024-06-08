
export class UpdateCategoryDto {
   private constructor(
      public readonly name:        string,
      public readonly available:   boolean,
   ){}

   static update( object: { [key: string]: any}): [string?, UpdateCategoryDto?]{
      const { name, available = false } = object;
      let availableBoolean = available;

      if( !name){
         return ['Missing name'];
      }
      if( typeof available !== 'boolean'){
         availableBoolean = ( available === 'true')
      }
      return [undefined, new UpdateCategoryDto(name, availableBoolean)];
   }
}