import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  public service = this.authService;

  oNLogin(){
    this.service.onLogin();
  }

  public loginForm = this.formBuilder.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6)]]
  })

  public onLogin(): void {
    if( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value)
    this.router.navigate(['/dashboard'])
    this.loginForm.reset({ email: '', password: ''})
  }

}
