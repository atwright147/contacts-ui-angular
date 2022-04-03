import { Component, OnInit } from '@angular/core';

import { Contact, ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  readonly contacts$ = this.contactsService.contacts$;
  readonly selected$ = this.contactsService.selected$;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.contactsService.get().subscribe();
  }

  select(contact: Contact): void {
    this.contactsService.select(contact);
  }
}
