import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { MenuItems } from '@dashboard/interfaces';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public MenuItem = input.required<MenuItems[]>();
}
