import { PointsFees } from './pointsFees';
import { of } from 'rxjs';

describe('PointsFees', () => {
  let mockDataReaderService: any;
  let mockAuthService: any;
  let mockStateService: any;
  let component: PointsFees;

  beforeEach(() => {
    mockDataReaderService = {
      readJsonFile$: jasmine.createSpy('readJsonFile$').and.returnValue(of({ PointsFeesTestResults: {} }))
    };
    mockAuthService = { isLoggedIn: () => true };
    mockStateService = {
      getState: () => ({ loanAmount: null, loanType: null, result: null }),
      setState: () => {},
      clearState: () => {}
    };
    component = new PointsFees(mockDataReaderService, mockAuthService, mockStateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate loan amount', () => {
    component.loanAmountTouched = true;
    component.loanAmount = 10000;
    expect(component.loanAmountInvalid).toBeTrue();
    component.loanAmount = 25000;
    expect(component.loanAmountInvalid).toBeFalse();
    component.loanAmount = 2000000;
    expect(component.loanAmountInvalid).toBeFalse();
    component.loanAmount = 2500001;
    expect(component.loanAmountInvalid).toBeTrue();
  });

  it('should validate loan type', () => {
    component.loanTypeTouched = true;
    component.loanType = '';
    expect(component.loanTypeInvalid).toBeTrue();
    component.loanType = 'fixed';
    expect(component.loanTypeInvalid).toBeFalse();
    component.loanType = 'adjustable';
    expect(component.loanTypeInvalid).toBeFalse();
  });

  it('should calculate fees for fixed loan type', () => {
    component.loanAmount = 100000;
    component.loanType = 'fixed';
    component.calculateFees();
    expect(component.result).toBe('$1000.00');
  });

  it('should calculate fees for adjustable loan type', () => {
    component.loanAmount = 100000;
    component.loanType = 'adjustable';
    component.calculateFees();
    expect(component.result).toBe('$1500.00');
  });

  it('should not calculate fees if loan amount or type is invalid', () => {
    component.loanAmount = 10000;
    component.loanType = 'fixed';
    component.calculateFees();
    expect(component.result).toBe('');
    component.loanAmount = 100000;
    component.loanType = '';
    component.calculateFees();
    expect(component.result).toBe('');
  });

  it('should handle null and undefined loan amount', () => {
    component.loanAmountTouched = true;
    component.loanAmount = null as any;
    expect(component.loanAmountInvalid).toBeTrue();
    component.loanAmount = undefined as any;
    expect(component.loanAmountInvalid).toBeTrue();
  });

  it('should restore state from service on init', () => {
    mockStateService.getState = () => ({ loanAmount: 50000, loanType: 'fixed', result: '$500.00' });
    component = new PointsFees(mockDataReaderService, mockAuthService, mockStateService);
    component.ngOnInit();
    expect(component.loanAmount).toBe(50000);
    expect(component.loanType).toBe('fixed');
    expect(component.result).toBe('$500.00');
  });

  it('should call setState on calculateFees', () => {
    spyOn(mockStateService, 'setState');
    component.loanAmount = 100000;
    component.loanType = 'fixed';
    component.calculateFees();
    expect(mockStateService.setState).toHaveBeenCalledWith(100000, 'fixed', '$1000.00');
  });
});
