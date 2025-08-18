import { Header } from './header';

describe('Header', () => {
  let mockAuthService: any;
  let mockRouter: any;
  let component: Header;

  beforeEach(() => {
    mockAuthService = {
      isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(true),
      logout: jasmine.createSpy('logout')
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    component = new Header(mockAuthService, mockRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return username when logged in', () => {
    expect(component.username).toBe('admin');
  });

  it('should return empty username when not logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(false);
    expect(component.username).toBe('');
  });

  it('should call logout and redirect on logout()', () => {
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should handle logout when already logged out', () => {
    mockAuthService.isLoggedIn.and.returnValue(false);
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should handle username getter with unexpected AuthService behavior', () => {
    mockAuthService.isLoggedIn.and.returnValue(undefined);
    expect(component.username).toBe('');
  });
});
