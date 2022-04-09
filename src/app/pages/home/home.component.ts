import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly favourites$ = this.contactsService.contacts$
    .pipe(
      map((contacts) => contacts.filter((contact) => contact.isFavourite)),
    );

  constructor(
    private readonly contactsService: ContactsService,
  ) { }
}
