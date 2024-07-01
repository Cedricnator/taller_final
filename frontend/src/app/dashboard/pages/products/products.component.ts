import { Component, inject, signal } from '@angular/core';
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
export class ProductsComponent {
  private _excelService = inject(ExcelService);
  private _productService = inject(ProductService)

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
