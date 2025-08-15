import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Tabs } from './Components/tabs/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RegulatoryComplianceUI');

  @ViewChild('tabsComp') tabsComp!: Tabs;

  get isAnyTabFailed(): boolean {
    return this.tabsComp?.isAnyTabFailed ?? false;
  }
}
