import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';
import { Motifs } from '../button/button.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  readonly selected$ = this.contactsService.selected$;
  readonly Motifs = Motifs;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
  }

}
