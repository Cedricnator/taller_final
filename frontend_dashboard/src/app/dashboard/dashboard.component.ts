import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, SidemenuComponent } from '../shared/components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidemenuComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
