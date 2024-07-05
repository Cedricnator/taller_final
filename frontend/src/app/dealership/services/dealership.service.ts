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
export class DealerShipService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:3000/api/v1';

  public getProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/product/`).pipe(
      map(resp => resp),
      tap(console.log)
    );
  }
}
