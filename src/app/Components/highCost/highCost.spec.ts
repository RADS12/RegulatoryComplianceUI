import { HighCost } from './highCost';
import { of } from 'rxjs';

describe('HighCost', () => {
  let mockDataReaderService: any;
  let mockAuthService: any;
  let component: HighCost;

  beforeEach(() => {
    mockDataReaderService = {
      readJsonFile$: jasmine.createSpy('readJsonFile$').and.returnValue(of({ HighCostTestResults: {} }))
    };
    mockAuthService = { isLoggedIn: () => true };
    component = new HighCost(mockDataReaderService, mockAuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not load data if not logged in', () => {
    mockAuthService.isLoggedIn = () => false;
    component = new HighCost(mockDataReaderService, mockAuthService);
    component.ngOnInit();
    expect(mockDataReaderService.readJsonFile$).not.toHaveBeenCalled();
    expect(component.highCostData).toBeUndefined();
  });

  it('should handle missing data gracefully', () => {
    mockDataReaderService.readJsonFile$.and.returnValue(of({}));
    component.ngOnInit();
    expect(component.highCostData).toBeUndefined();
  });
});
