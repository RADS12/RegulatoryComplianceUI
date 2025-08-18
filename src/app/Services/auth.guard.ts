import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    // Example role check (replace with your logic)
    if (!this.auth.hasRole || !this.auth.hasRole('admin')) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
