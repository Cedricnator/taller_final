import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dealership',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './dealership.component.html',
  styles: ``
})
export class DealershipComponent {

}
