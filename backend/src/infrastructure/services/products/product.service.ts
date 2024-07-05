// import { prisma } from '../../../data';
import { PrismaClient } from '@prisma/client';
import { CustomError, CreateCategoryDto, UserEntity, CreateProductDto } from '../../../domain';
import { PaginationDto } from '../../../domain/dto/shared/pagination.dto';


export class ProductService{
   prisma = new PrismaClient(); 

   constructor(){}

   public createOneProduct = async( createProductDto: CreateProductDto ) => {
      try {         
         const product = await this.prisma.product.create({
            data: {
               name: createProductDto.name,
               description: createProductDto.description,
               price: createProductDto.price,
               stock: createProductDto.stock,
               category: {
                  connect: {
                     id: createProductDto.categoryId
                  }
               },
               User: {
                  connect: {
                     id: createProductDto.userId
                  }
               }
            }
         })

         if(!product) CustomError.internalServer('Error creating product');

         return {
            id:          product.id,
            name:        product.name,
            description: product.description,
            stock:       product.stock,
            byUserId: {
               id: product.userId
            },
            inCategoryId: {
               id: product.categoryId
            }
         }
      } catch (error) {
         CustomError.internalServer(`Error: ${error}`);
      }
   }

   public getProducts = async( paginationDto: PaginationDto )  => {
      const { page, limit } = paginationDto;

      try {
         // Obtiene el total de categorias y las categorias por pagina.
         const [total, products] = await Promise.all([ 
            this.prisma.product.count(),
            this.prisma.product.findMany({
               skip:(( page - 1 ) * limit ),
               take: limit,
            })
         ]);

         // Devuelve las categorias por id, nombre y si esta disponible.
         return { 
            page,
            limit,
            total,
            next: `/api/v1/product?page=${ (page+1) }&limit=${ limit }`,
            prev: (page-1 > 0) ? `/api/v1/product?page=${ (page-1) }&limit=${ limit }` : "",
            products: products.map( product => ({
               id:          product.id,
               name:        product.name,
               description: product.description,
               price:       product.price,
               stock:       product.stock,
               img:         product.img,
            }))
         }
      } catch (error) {
         CustomError.internalServer(`Error: ${error}`);
      }
   }

}