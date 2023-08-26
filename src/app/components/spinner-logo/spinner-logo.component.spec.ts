import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLogoComponent } from './spinner-logo.component';

describe('SpinnerLogoComponent', () => {
  let component: SpinnerLogoComponent;
  let fixture: ComponentFixture<SpinnerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
