import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { MenuItems } from '@dashboard/interfaces';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  public menuItems = input.required<MenuItems[]>()
}
