// import { prisma } from '../../../data';
import { PrismaClient } from '@prisma/client';
import { CustomError, CreateCategoryDto, UserEntity, CategoryEntity } from '../../../domain';


export class CategoryService{
   prisma = new PrismaClient(); 
   constructor(
      
   ){}

   public createOneCategory = async(createCategoryDto: CreateCategoryDto, userEntity: UserEntity) => {
      try {
         console.log('createCategoryDto', createCategoryDto);
         console.log('userEntity', userEntity);
         const category = await this.prisma.category.create({
            data: {
               ...createCategoryDto,
               user: {
                  connect: {
                     id: userEntity.id
                  }
               }
            }
         })
         return {
            id:        category.id,
            name:      category.name,
            available: category.available,
            byUser: {
               id: category.userId
            }
         }
      } catch (error) {
         CustomError.internalServer(`Error: ${error}`);
      }
   }

   public getCategories = async()  => {
     
     try {
         const categories = await this.prisma.category.findMany();
         
         return categories.map( category => ({
            id:        category.id,
            name:      category.name,
            available: category.available
         }))

      } catch (error) {
         CustomError.internalServer(`Error: ${error}`);
      }
   }

}