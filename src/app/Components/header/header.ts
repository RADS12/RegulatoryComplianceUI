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
    return this.authService.isLoggedIn() ? (this.authService['userRole'] ?? '') : '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
