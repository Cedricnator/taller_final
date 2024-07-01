import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs';
import { Product } from './excel-service.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:8080/api/v1/';

  public getProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }
}
