import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';
import { Motifs } from '../button/button.component';
import { ItemType } from '../contact-details-item/contact-details-item.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  readonly selected$ = this.contactsService.selected$;
  readonly Motifs = Motifs;
  readonly ItemType = ItemType;

  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
  }

}
