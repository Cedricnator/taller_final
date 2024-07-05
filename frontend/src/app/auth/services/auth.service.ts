import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiURL = 'localhost:3000/api/v1/auth/login';
  public isAuthenticated = signal(false);
  private http = inject(HttpClient);

  public login( email: string, password: string){
    console.log({ email, password})
    const expEmail="cedric@google.com"
    const expPassword="123456789"
    if(email == expEmail && password == expPassword){
      this.isAuthenticated.set(true)
      return true;
    }
    return false;
  }

  public register( email: string, password: string, name: string){
    console.log("registrando desde el servicio")
  }

}
