import { Component, OnInit, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      // Encuentra el elemento por su clase, id, etc. Asegúrate de que el elemento exista en tu plantilla HTML.
      const heroElement = this.el.nativeElement.querySelector('#hero');
      this.renderer.setStyle(heroElement, 'backgroundImage', "url('images/4056.jpg')");
    }, 10000);
  }

}
