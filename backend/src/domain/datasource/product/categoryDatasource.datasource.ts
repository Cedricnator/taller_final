export abstract class CategoryDatasource {
   
   abstract createOneCategory():  Promise<any>;

   abstract getAllCategories():   Promise<any>;

   abstract getOneCategoryById(): Promise<any>;

   abstract updateOneCategory():  Promise<any>;

   abstract deleteOneCategory():  Promise<any>;

}