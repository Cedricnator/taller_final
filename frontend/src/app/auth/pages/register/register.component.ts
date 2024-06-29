import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { FormGroup } from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);

  public registerForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  public register(){
    this._authService.register(
      this.registerForm.value.name, 
      this.registerForm.value.email, 
      this.registerForm.value.password
    )
    console.log(this.registerForm.value)
    console.log('Registering...')
  }
}
