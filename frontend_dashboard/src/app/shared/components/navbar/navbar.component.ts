import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public menuItems = routes
    .map( route => route.children ?? [])
    .flat( )
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes(':'))

}
