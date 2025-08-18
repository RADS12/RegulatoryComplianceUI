import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class Tabs {
  get tabs() {
    const allTabs = [
      { label: 'Points and Fees', route: 'points-fees', status: 'passed', roles: ['admin', 'user'] },
      { label: 'Safe Harbor', route: 'safe-harbor', status: 'passed', roles: ['admin', 'user'] },
      { label: 'High Cost', route: 'high-cost', status: 'passed', roles: ['admin', 'user'] },
      { label: 'State Regulatory Tests', route: 'state-regulatory-tests', status: 'passed', roles: ['admin'] }
    ];
    // Only show tabs for which the user has the required role
  return allTabs.filter(tab => tab.roles.some(role => this.authService.hasRole(role)));
  }
  selectedIndex = 0;

  constructor(private router: Router, public authService: AuthService) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  selectTab(index: number) {
    this.selectedIndex = index;
    this.router.navigate([this.tabs[index].route]);
  }

  get isAnyTabFailed(): boolean {
    return this.tabs.some(tab => tab.status === 'failed');
  }
}