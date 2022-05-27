import { Component, OnInit } from '@angular/core';

import { ContactsService } from './services/contacts/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.contactsService.get().subscribe();
  }
}
