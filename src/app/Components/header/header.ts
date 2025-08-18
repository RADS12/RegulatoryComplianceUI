import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() isAnyTabFailed: boolean = false;
  constructor(public authService: AuthService, private router: Router) {}

  get username(): string {
    // For demo, return static username. Replace with real user info if available.
    return this.authService.isLoggedIn() ? 'admin' : '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
