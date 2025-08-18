import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;

  login(username: string, password: string): boolean {
    // Replace with real authentication logic
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    }
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    this.isAuthenticated = false;
    this.userRole = null;
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  hasRole(role: string): boolean {
    return this.userRole === role;
  }
}
