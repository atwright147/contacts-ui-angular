import { Component } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';
import { Contact } from '../../types/contact.types';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  readonly contacts$ = this.contactsService.contacts$;
  readonly selected$ = this.contactsService.selected$;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  select(contact: Contact): void {
    this.contactsService.select(contact);
  }

  handleContextMenu(contactId: number): void {
    console.log('handleContextMenu');
  }
}
