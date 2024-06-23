import { Component } from '@angular/core';
import { CarrouselComponent } from './component/carrousel/carrousel.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MansoryGridComponent } from './component/mansory-grid/mansory-grid.component';

@Component({
  standalone: true,
  imports: [CarrouselComponent, GalleryComponent, MansoryGridComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
