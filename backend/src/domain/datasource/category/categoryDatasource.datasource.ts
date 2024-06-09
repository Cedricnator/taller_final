import { CreateCategoryDto } from '../../dto/category/create-category.dto';
export abstract class CategoryDatasource {
   
   abstract createOneCategory(createCategoryDto: CreateCategoryDto):  Promise<any>;

   abstract getAllCategories():   Promise<any>;

   abstract getOneCategoryById(): Promise<any>;

   abstract updateOneCategory():  Promise<any>;

   abstract deleteOneCategory():  Promise<any>;

}