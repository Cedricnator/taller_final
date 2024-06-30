import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface CardInfo {
  title: string;
  content: string;
  action: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cardInfo = input.required<CardInfo[]>();
}
