import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  readonly panelOpenState = signal(false);

}
