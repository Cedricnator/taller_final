import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {}

  menuItems: MenuItem [] = [
    { title: 'Home', href: '/home' },
    { title: 'Products' , href: '/products' },
    { title: 'About Us' , href: '/about-us' },
    { title: 'Contact Us' , href: '/contact-us' },
  ]
}
