import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { MenuItems } from '@dashboard/interfaces';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  public menuItems = input.required<MenuItems[]>()
}
