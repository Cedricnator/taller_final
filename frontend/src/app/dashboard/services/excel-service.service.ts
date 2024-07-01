import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface Product{
  product:      string;
  category:     string;
  stock:        number;
  price:        number;
  last_updated: string;
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
