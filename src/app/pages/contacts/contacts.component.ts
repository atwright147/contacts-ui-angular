import { Component } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  readonly selected$ = this.contactsService.selected$;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }
}
