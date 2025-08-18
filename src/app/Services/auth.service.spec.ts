import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be logged in by default', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should login with correct credentials', () => {
    expect(service.login('admin', 'password')).toBeTrue();
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should not login with incorrect credentials', () => {
    expect(service.login('user', 'wrong')).toBeFalse();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should logout', () => {
    service.login('admin', 'password');
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });
});
