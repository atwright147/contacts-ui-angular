import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomInputComponent } from './input.component';
import { ErrorsComponent } from '../../errors/errors.component';

describe('InputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CustomInputComponent,
        ErrorsComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
