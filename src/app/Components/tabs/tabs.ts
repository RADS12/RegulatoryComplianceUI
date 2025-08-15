import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class Tabs {
  tabs = [
    { label: 'Safe Harbor', route: 'safe-harbor', status: 'passed' },
    { label: 'High Cost', route: 'high-cost', status: 'passed' },
    { label: 'Points and Fees', route: 'points-fees', status: 'passed' },
    { label: 'State Regulatory Tests', route: 'state-regulatory-tests', status: 'passed' }
  ];
  selectedIndex = 0;

  constructor(private router: Router) {}

  selectTab(index: number) {
    this.selectedIndex = index;
    this.router.navigate([this.tabs[index].route]);
  }

  get isAnyTabFailed(): boolean {
    return this.tabs.some(tab => tab.status === 'failed');
  }
}