import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  img?: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:8000/document';

  public generateExcel(products: Product[]){
    return this.http.post(`${this.baseUrl}/generate-excel`, 
      products, 
      { responseType: 'blob' });
  }

}
