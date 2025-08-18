import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Log error, show notification, send to server, etc.
    console.error('Global Error:', error);
    // Optionally, display a user-friendly message or redirect
  }
}
