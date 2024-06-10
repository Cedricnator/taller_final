import { CategoryDatasource, CategoryRepository, CreateCategoryDto } from '../../../domain';

export class CategoryRepositoryImpl implements CategoryRepository {
   constructor(
      private readonly categoryDatasource: CategoryDatasource
   ){}

   async createOneCategory(createCategoryDto: CreateCategoryDto): Promise<any> {
      return await this.categoryDatasource.createOneCategory(createCategoryDto);
   }
 
   async getAllCategories(): Promise<any> {
      return await this.categoryDatasource.getAllCategories();
   }
 
   async getOneCategoryById(): Promise<any> {
      return await this.categoryDatasource.getOneCategoryById();
   }
 
   async updateOneCategory(): Promise<any> {
      return await this.categoryDatasource.updateOneCategory();
   }
 
   async deleteOneCategory(): Promise<any> {
      return await this.categoryDatasource.deleteOneCategory();
   }

}