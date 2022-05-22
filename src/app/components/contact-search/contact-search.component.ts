import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSearchComponent {
  readonly searchForm = this.contactsService.searchForm;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  onSubmit() {
    console.log(this.contactsService.searchForm.value);
  }
}
