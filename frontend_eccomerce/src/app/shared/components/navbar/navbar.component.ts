import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'NavbarComponent',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {}

  menuItems: MenuItem [] = [
    { title: 'Home', href: '' },
    { title: 'Products' , href: '/product' },
    { title: 'About Us' , href: '/about-us' },
    { title: 'Contact Us' , href: '/contact-us' },
  ]
}
