import { ApplicationRef, Component, inject } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  constructor() {
    const applicationRef = inject(ApplicationRef);
    applicationRef.isStable.pipe( first((isStable) => isStable) ).subscribe(() => {
      // Note that we don't need to use `runOutsideAngular` because `isStable`
      // emits events outside of the Angular zone when it's truthy (falsy values
      // are emitted inside the Angular zone).
      setTimeout(() => { 5 });
    });
  }
}
