import { Component } from '@angular/core';

import { ContactsService } from '../../services/contacts/contacts.service';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
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
    private readonly contextMenuService: ContextMenuService,
  ) { }

  select(contact: Contact): void {
    this.contactsService.select(contact);
  }

  handleContextMenu(event: MouseEvent, contactId: number): void {
    event.preventDefault();
    event.stopPropagation();

    this.contextMenuService.set({
      show: true,
      target: event.target as HTMLElement,
      content: [
        {
          title: 'Edit',
          action: () => console.info('Edit', contactId),
        },
        {
          title: 'Delete',
          action: () => console.info('Delete', contactId),
        },
      ],
    });
  }

  handleOutSideClick(): void {
    this.contextMenuService.set({
      show: false,
      target: null,
      content: [],
    });
  }
}
