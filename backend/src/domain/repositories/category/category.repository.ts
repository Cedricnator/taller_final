export abstract class CategoryRepository {
   
   abstract createOneCategory():  Promise<any>;

   abstract getAllCategories():   Promise<any>;

   abstract getOneCategoryById(): Promise<any>;

   abstract updateOneCategory():  Promise<any>;

   abstract deleteOneCategory():  Promise<any>;

}