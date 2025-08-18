import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, NgClass } from '@angular/common';
import { DataReaderService } from '../../Services/data-reader.service';
import { AuthService } from '../../Services/auth.service';
import { PointsFeesStateService } from './pointsFees-state.service';

@Component({
  selector: 'points-fees',
  standalone: true,
  imports: [FormsModule, DecimalPipe, NgClass],
  templateUrl: './pointsFees.html',
  styleUrls: ['./pointsFees.css']
})
export class PointsFees implements OnInit {
  readonly minLoanAmount = 25000;
  readonly maxLoanAmount = 2000000;
  loanAmountTouched: boolean = false;
  loanTypeTouched: boolean = false;
  get loanAmountInvalid(): boolean {
    return this.loanAmountTouched && (
      !this.loanAmount ||
      this.loanAmount < this.minLoanAmount ||
      this.loanAmount > this.maxLoanAmount
    );
  }
  get loanTypeInvalid(): boolean {
    return this.loanTypeTouched && !this.loanType;
  }
  pointsFeesData: any;

  loanAmount: number | null = null;
  loanType: string = 'fixed';
  result: string = '';

  constructor(
    private dataReaderService: DataReaderService,
    public authService: AuthService,
    private stateService: PointsFeesStateService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.dataReaderService.readJsonFile$('PointsFeesTestResults.json').subscribe(data => {
        this.pointsFeesData = data.PointsFeesTestResults;
      });
    }
    // Restore state if available
    const state = this.stateService.getState();
    if (state.loanAmount !== null) {
      this.loanAmount = state.loanAmount;
    }
    if (state.loanType !== null) {
      this.loanType = state.loanType;
    }
    if (state.result !== null) {
      this.result = state.result;
    }
  }

  calculateFees() {
    this.loanAmountTouched = true;
    this.loanTypeTouched = true;
    if (!this.loanAmount || this.loanAmount < this.minLoanAmount || this.loanAmount > this.maxLoanAmount || !this.loanType) {
      this.result = '';
      this.stateService.setState(this.loanAmount, this.loanType, this.result);
      return;
    }
    if (this.loanType === 'fixed') {
      this.result = '$' + (this.loanAmount * 0.01).toFixed(2);
    } else {
      this.result = '$' + (this.loanAmount * 0.015).toFixed(2);
    }
    this.stateService.setState(this.loanAmount, this.loanType, this.result);
  }
}
