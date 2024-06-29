import { Component, signal } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';

interface Car {
  imgSrc: () => string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // carss = signal<Car[]>([
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 1", description:"This is car 1" },
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 2", description:"This is car 2" },
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 3", description:"This is car 3" },
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 4", description:"This is car 4" },
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 5", description:"This is car 5" },
  //   { imgSrc: "https://via.placeholder.com/150", title:"Car 6", description:"This is car 6" },
  // ]);

  public cars: Car[] = [
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 1", description:"This is car 1" },
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 2", description:"This is car 2" },
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 3", description:"This is car 3" },
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 4", description:"This is car 4" },
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 5", description:"This is car 5" },
    { imgSrc: () => "https://via.placeholder.com/150", title:"Car 6", description:"This is car 6" },
  ]
}
