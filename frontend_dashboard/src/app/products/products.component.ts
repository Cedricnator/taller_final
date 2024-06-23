import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

}
