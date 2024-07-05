import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@dashboard/components';
import { ExcelService, Product } from '@dashboard/services/excel-service.service';
import { ProductService } from '@dashboard/services/product-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent{
  private _excelService = inject(ExcelService);
  public _productService = inject(ProductService)
  public router = inject(Router);

  public products = signal<Product[]>([])

  // constructor(){
  //   this._productService.getProducts().subscribe(
  //     (products) => {
  //       this.products = products;
  //     }
  //   )
  // }

  public generateExcelDocument(products: Product[]){
    return this._excelService.generateExcel(products);
  }
}
