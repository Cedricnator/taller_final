import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  img?: string;
  description: string;
  price: number;
  stock: number;
  userId: number;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:3000/api/v1';

  public getProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/product/`).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }

  public createProduct(productProperties: Product): Observable<any>{
    const { name, description, price, stock, userId, categoryId } = productProperties;
    console.log(productProperties)
    return this.http.post<any>(`${this.baseUrl}/product/create`,
      { name, description, price, stock, userId, categoryId })
        .pipe(
          map(resp => resp),
          tap(console.log)
        );
  }

  public deleteProduct(id: number): Observable<void>{
    return this.http.delete<any>(`${this.baseUrl}/product/${id}`).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }

  public updateProduct(id: number): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/product/${id}`, {}).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }

  public getProductById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/product/${id}`).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }
}
