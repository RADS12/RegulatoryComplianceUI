import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;

  login(username: string, password: string): boolean {
    // Replace with real authentication logic
    if ((username === 'admin' || username === 'user') && password === 'password') {
      this.isAuthenticated = true;
      this.userRole = username;
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

  hasRole(role: string | string[]): boolean {
    if (!this.userRole) return false;
    if (Array.isArray(role)) {
      return role.includes(this.userRole);
    }
    return this.userRole === role;
  }
}
