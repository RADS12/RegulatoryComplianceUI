import { LoginComponent } from './login';

describe('LoginComponent', () => {
  let mockAuthService: any;
  let mockRouter: any;
  let component: LoginComponent;

  beforeEach(() => {
    mockAuthService = {
      login: jasmine.createSpy('login').and.returnValue(false)
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    component = new LoginComponent(mockAuthService, mockRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set error on invalid login', () => {
    component.username = 'user';
    component.password = 'wrong';
    mockAuthService.login.and.returnValue(false);
    component.login();
    expect(component.error).toBe('Invalid credentials. Please try again.');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should navigate on valid login', () => {
    component.username = 'user';
    component.password = 'pass';
    mockAuthService.login.and.returnValue(true);
    component.login();
    expect(component.error).toBe('');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should handle empty username and password', () => {
    component.username = '';
    component.password = '';
    mockAuthService.login.and.returnValue(false);
    component.login();
    expect(component.error).toBe('Invalid credentials. Please try again.');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should handle undefined/null username and password', () => {
    component.username = undefined as any;
    component.password = undefined as any;
    mockAuthService.login.and.returnValue(false);
    component.login();
    expect(component.error).toBe('Invalid credentials. Please try again.');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    component.username = null as any;
    component.password = null as any;
    component.login();
    expect(component.error).toBe('Invalid credentials. Please try again.');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
