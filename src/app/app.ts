import { Component, signal, ViewChild, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './Services/http-error.interceptor';
import { GlobalErrorHandler } from './Services/global-error-handler';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Tabs } from './Components/tabs/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class App {
  protected readonly title = signal('RegulatoryComplianceUI');

  @ViewChild('tabsComp') tabsComp!: Tabs;

  get isAnyTabFailed(): boolean {
    return this.tabsComp?.isAnyTabFailed ?? false;
  }
}
