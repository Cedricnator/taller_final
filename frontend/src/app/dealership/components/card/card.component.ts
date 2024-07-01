import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  imgSrc = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  price = input();
}
