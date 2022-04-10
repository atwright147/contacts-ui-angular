import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsItemComponent } from './contact-details-item.component';

describe('ContactDetailsItemComponent', () => {
  let component: ContactDetailsItemComponent;
  let fixture: ComponentFixture<ContactDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
