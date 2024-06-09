import { CategoryDatasource, CreateCategoryDto } from "../../../domain";

export class CategoryDatasourceImpl implements CategoryDatasource {
   createOneCategory(createCategoryDto: CreateCategoryDto): Promise<any> {
      throw new Error("Method not implemented.");
   }
   getAllCategories(): Promise<any> {
      throw new Error("Method not implemented.");
   }
   getOneCategoryById(): Promise<any> {
      throw new Error("Method not implemented.");
   }
   updateOneCategory(): Promise<any> {
      throw new Error("Method not implemented.");
   }
   deleteOneCategory(): Promise<any> {
      throw new Error("Method not implemented.");
   }
}