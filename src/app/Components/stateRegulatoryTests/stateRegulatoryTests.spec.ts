import { StateRegulatoryTests } from './stateRegulatoryTests';
import { of } from 'rxjs';

describe('StateRegulatoryTests', () => {
  let component: StateRegulatoryTests;
  let mockDataReaderService: any;
  let mockAuthService: any;

  beforeEach(() => {
    mockDataReaderService = {
      readJsonFile$: jasmine.createSpy('readJsonFile$').and.returnValue(of({ StateRegulatoryTestResults: { State: 'CA', Result: 'Pass' } }))
    };
    mockAuthService = { isLoggedIn: () => true };
    component = new StateRegulatoryTests(mockDataReaderService, mockAuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load StateRegulatory data on init if logged in', () => {
    component.ngOnInit();
    expect(mockDataReaderService.readJsonFile$).toHaveBeenCalledWith('StateRegulatoryTestResults.json');
    expect(component.stateRegulatoryData).toEqual({ State: 'CA', Result: 'Pass' });
  });

  it('should not load data if not logged in', () => {
    mockAuthService.isLoggedIn = () => false;
    component = new StateRegulatoryTests(mockDataReaderService, mockAuthService);
    component.ngOnInit();
    expect(mockDataReaderService.readJsonFile$).not.toHaveBeenCalled();
    expect(component.stateRegulatoryData).toBeUndefined();
  });

  it('should handle missing data gracefully', () => {
    mockDataReaderService.readJsonFile$.and.returnValue(of({}));
    component.ngOnInit();
    expect(component.stateRegulatoryData).toBeUndefined();
  });

});
