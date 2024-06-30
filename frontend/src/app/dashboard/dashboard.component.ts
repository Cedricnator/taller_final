import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import type { MenuItems } from './interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  public menuItems = signal<MenuItems[]>([
    { title: 'Overview', link: 'home', icon: "home" }, 
    { title: 'Products', link: 'products', icon: "inventory" },
    { title: 'Task', link: 'task', icon: "task" }
  ])
}
