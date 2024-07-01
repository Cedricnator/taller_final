import { Component, signal } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';

interface Car {
  imgSrc: string;
  title: string;
  description: string;
  price: number
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  carss = signal<Car[]>([
    { imgSrc: "images/image_principal.png", title:"Toyota Raize", description:"Desde 12.429.000", price: 2000, },
    { imgSrc: "images/toyota-cars/toyota-pick-up-1.png", title:"Toyota Hilux", description:"Desde 19.429.000", price: 2000,},
    { imgSrc: "images/toyota-cars/toyota-pick-up-2.png", title:"Toyota Hilux GR", description:"Desde 42.429.000", price: 2000, },
    { imgSrc: "images/toyota-cars/toyota-sedan-1.png", title:"Toyota Sedan 1", description:"Desde 9.429.000", price: 2000,},
    { imgSrc: "images/toyota-cars/toyota-sedan-2.png", title:"Toyota Sedan 2", description:"Desde 13.429.000", price: 2000, },
    { imgSrc: "images/toyota-cars/toyota-suv-1.png", title:"Toyota Suv", description:"Desde 52.429.000", price: 2000, },
  ]);
}
