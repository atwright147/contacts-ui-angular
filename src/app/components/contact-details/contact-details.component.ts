import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';
import { Contact } from '../../types/contact.types';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  readonly selected$ = this.contactsService.selected$;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
  }

}
