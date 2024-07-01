import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItems } from '@dashboard/interfaces';

@Component({
  selector: 'app-dealership',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './dealership.component.html',
  styles: `
   
  `
})
export class DealershipComponent {

  public MenuItems = signal<MenuItems[]>([
    { title: 'Home', link: '/dealership/land' },
    { title: 'Models', link: '/dealership/products' },
    { title: 'About', link: '/dealership/about' },
    { title: 'Contact', link: '/dealership/contact'}
  ])

}
