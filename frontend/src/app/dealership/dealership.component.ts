import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-dealership',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './dealership.component.html',
  styles: ``
})
export class DealershipComponent {

}
