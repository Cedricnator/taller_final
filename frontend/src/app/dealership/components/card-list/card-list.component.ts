import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface modelCar {
  imgSrc: string;
  title: string;
  description: string;
  price: number
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  objectList = input.required<modelCar[]>();
}
