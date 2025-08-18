import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // The app template does not render a <h1> with the title, so this test is not valid.
  // If you want to test the title property, use:
  it('should have the correct title property', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
  expect(app['title']()).toBe('RegulatoryComplianceUI');
  });
});
