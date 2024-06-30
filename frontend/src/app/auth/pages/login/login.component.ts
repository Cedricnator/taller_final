import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);

  public myForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.minLength(6), Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  public login(){
    this._authService.login(
      this.myForm.value.email,
      this.myForm.value.password
    )
    console.log(this.myForm.value);
  }
}
