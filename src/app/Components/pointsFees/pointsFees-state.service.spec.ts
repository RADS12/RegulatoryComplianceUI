import { PointsFeesStateService } from './pointsFees-state.service';

describe('PointsFeesStateService', () => {
  let service: PointsFeesStateService;

  beforeEach(() => {
    service = new PointsFeesStateService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get state', () => {
    service.setState(100000, 'fixed', '$1000.00');
    const state = service.getState();
    expect(state.loanAmount).toBe(100000);
    expect(state.loanType).toBe('fixed');
    expect(state.result).toBe('$1000.00');
  });

  it('should clear state', () => {
    service.setState(100000, 'fixed', '$1000.00');
    service.clearState();
    const state = service.getState();
    expect(state.loanAmount).toBeNull();
    expect(state.loanType).toBeNull();
    expect(state.result).toBeNull();
  });
});
