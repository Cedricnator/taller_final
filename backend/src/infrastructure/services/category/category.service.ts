// import { prisma } from '../../../data';
import { PrismaClient } from '@prisma/client';
import { CustomError, CreateCategoryDto, UserEntity, CategoryEntity } from '../../../domain';
import { PaginationDto } from '../../../domain/dto/shared/pagination.dto';


export class CategoryService{
   prisma = new PrismaClient(); 
   constructor(
      
   ){}

   public createOneCategory = async( createCategoryDto: CreateCategoryDto, userEntity: UserEntity ) => {
      try {
         const category = await this.prisma.category.create({
            data: {
               name: createCategoryDto.name,
               available: createCategoryDto.available,
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

   public getCategories = async( paginationDto: PaginationDto )  => {
      const { page, limit } = paginationDto;

      try {
         // Obtiene el total de categorias y las categorias por pagina.
         const [total, categories] = await Promise.all([ 
            this.prisma.category.count(),
            this.prisma.category.findMany({
               skip:(( page - 1 ) * limit ),
               take: limit,
            })
         ]);

         // Devuelve las categorias por id, nombre y si esta disponible.
         return { 
            page,
            limit,
            total,
            next: `/api/v1/category?page=${ (page+1) }&limit=${ limit }`,
            prev: (page-1 > 0) ? `/api/v1/category?page=${ (page-1) }&limit=${ limit }` : "",
            categories: categories.map( category => ({
               id:        category.id,
               name:      category.name,
               available: category.available
            }))
         }
      } catch (error) {
         CustomError.internalServer(`Error: ${error}`);
      }
   }

}