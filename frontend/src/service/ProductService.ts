export class ProductService {
   public static async getProductsSmall(): Promise<any> {
      return [
         { id: 1, name: 'Product 1', price: 100 }, 
         { id: 2, name: 'Product 2', price: 200 },
         { id: 3, name: 'Product 3', price: 100 }, 
         { id: 4, name: 'Product 4', price: 100 }, 
         { id: 5, name: 'Product 5', price: 100 }, 
         { id: 6, name: 'Product 6', price: 100 }, 
         { id: 7, name: 'Product 7', price: 100 }, 
         { id: 8, name: 'Product 8', price: 100 }, 
         { id: 9, name: 'Product 9', price: 100 }, 
      ];
   }

}