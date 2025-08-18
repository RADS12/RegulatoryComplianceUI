import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PointsFeesStateService {
  loanAmount: number | null = null;
  loanType: string | null = null;
  result: string | null = null;

  setState(loanAmount: number | null, loanType: string | null, result: string | null) {
    this.loanAmount = loanAmount;
    this.loanType = loanType;
    this.result = result;
  }

  getState() {
    return {
      loanAmount: this.loanAmount,
      loanType: this.loanType,
      result: this.result
    };
  }

  clearState() {
    this.loanAmount = null;
    this.loanType = null;
    this.result = null;
  }
}
