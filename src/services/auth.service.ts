import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username:string, password:string): boolean{
    if(username === 'admin' && password === 'admin'){
      localStorage.setItem('token', 'fake-jwt-toke');
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
