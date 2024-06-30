import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  
}
