import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItems {
  title: string;
  link: string;
  icon?: string;
}

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
