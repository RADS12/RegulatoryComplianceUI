import { SafeHarbor } from './safeHarbor';
import { of } from 'rxjs';

describe('SafeHarbor', () => {
  let component: SafeHarbor;
  let mockDataReaderService: any;
  let mockAuthService: any;

  beforeEach(() => {
    mockDataReaderService = {
      readJsonFile$: jasmine.createSpy('readJsonFile$').and.returnValue(of({ SafeHarborTestResults: {
        Type: 'Conventional',
        InterestRate: 4.5,
        Term: 30,
        PointsAndFees: 2500,
        TestATR: 'Pass',
        TestQM: 'Pass'
      }}))
    };
    mockAuthService = { isLoggedIn: () => true };
    component = new SafeHarbor(mockDataReaderService, mockAuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load SafeHarbor data on init if logged in', () => {
    component.ngOnInit();
    expect(mockDataReaderService.readJsonFile$).toHaveBeenCalledWith('SafeHarborTestResults.json');
    expect(component.safeHarborData).toEqual({
      Type: 'Conventional',
      InterestRate: 4.5,
      Term: 30,
      PointsAndFees: 2500,
      TestATR: 'Pass',
      TestQM: 'Pass'
    });
  });

  it('should not load data if not logged in', () => {
    mockAuthService.isLoggedIn = () => false;
    component = new SafeHarbor(mockDataReaderService, mockAuthService);
    component.ngOnInit();
    expect(mockDataReaderService.readJsonFile$).not.toHaveBeenCalled();
    expect(component.safeHarborData).toBeUndefined();
  });

  it('should handle missing data gracefully', () => {
    mockDataReaderService.readJsonFile$.and.returnValue(of({}));
    component.ngOnInit();
    expect(component.safeHarborData).toBeUndefined();
  });

});
