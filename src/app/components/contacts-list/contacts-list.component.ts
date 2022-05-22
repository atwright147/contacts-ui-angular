import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ContactsService } from '../../services/contacts/contacts.service';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { Contact } from '../../types/contact.types';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit, OnDestroy {
  private readonly subs: Subscription[] = [];
  readonly displayContacts$ = new BehaviorSubject<Contact[]>([]);
  readonly selected$ = this.contactsService.selected$;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly contextMenuService: ContextMenuService,
  ) { }

  ngOnInit(): void {
    const contactsSub = this.contactsService.contacts$.subscribe((contacts) => {
      this.displayContacts$.next(contacts);
    });

    const filterSub = combineLatest([this.contactsService.searchForm.valueChanges, this.contactsService.contacts$]).pipe(
      tap(([searchTerm, contacts]) => {
        let filteredContacts = contacts;
        if (searchTerm.term) {
          filteredContacts = contacts.filter((contact) => contact.firstName.toLowerCase().includes(searchTerm.term.toLowerCase()))
        }

        this.displayContacts$.next(filteredContacts);
      }),
    ).subscribe();

    this.subs.push(contactsSub, filterSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

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
