import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  private _isAuthenticated = false;
  private httpClient = inject(HttpClient);

  public login( email: string, password: string){
    console.log("loggeando desde el servicio")
  }

  public register( email: string, password: string, name: string){
    console.log("registrando desde el servicio")
  }

}
