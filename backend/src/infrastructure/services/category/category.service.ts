import { CreateCategoryDto } from '../../../domain/dto/category/create-category.dto';


export class CategoryService{
   constructor(
      
   ){}

   public createOneCategory = async(createCategoryDto: CreateCategoryDto) => {
      return {message: 'Todo bien, has llego a createOneCategoryDesdeService'};
   }

}