import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = false;

  isAuthenticated() {
    return this.isAuth;
  }

  logIn() {
    this.isAuth = true;
  }

  logOff() {
    this.isAuth = false;
  }
}
