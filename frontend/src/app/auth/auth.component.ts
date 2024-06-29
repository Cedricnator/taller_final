import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideimageComponent } from './components/sideimage/sideimage.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, SideimageComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  
}
