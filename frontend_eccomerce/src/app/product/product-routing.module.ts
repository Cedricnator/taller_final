import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductLayoutComponent } from './layout';

const routes: Routes = [
  { 
    path: '', 
    component: ProductLayoutComponent, 
    children: [
      { path: 'product', component: ProductPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
