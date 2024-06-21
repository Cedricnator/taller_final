import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private _authAPIURL = `http://localhost:3000`

  public login( email: string, password: string){
     
  }

  public register( name: string, email: string, password: string){

  }
}
