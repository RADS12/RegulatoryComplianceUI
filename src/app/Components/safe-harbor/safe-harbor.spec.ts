import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeHarbor } from './safe-harbor';

describe('SafeHarbor', () => {
  let component: SafeHarbor;
  let fixture: ComponentFixture<SafeHarbor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeHarbor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeHarbor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
