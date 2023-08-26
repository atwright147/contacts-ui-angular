import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { NgJoinPipeModule } from 'angular-pipes';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/fields/input/input.component';
import { CheckboxComponent } from '../../components/fields/checkbox/checkbox.component';
import { ContactsEditComponent } from './contacts-edit.component';

describe('ContactsEditComponent', () => {
  let component: ContactsEditComponent;
  let fixture: ComponentFixture<ContactsEditComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        CheckboxComponent,
        InputComponent,
        ContactsEditComponent,
      ],
      imports: [
        HttpClientTestingModule,
        NgJoinPipeModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
