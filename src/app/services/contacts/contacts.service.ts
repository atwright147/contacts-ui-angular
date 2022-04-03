import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Contact } from '../../types/contact.types';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private readonly url = 'http://localhost:4000/api/v1/contacts';

  private readonly _contacts = new BehaviorSubject<Contact[]>([]);
  readonly contacts$ = this._contacts.asObservable();

  private readonly _selected = new BehaviorSubject<Contact>({} as Contact);
  readonly selected$ = this._selected.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) { }

  get(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.url, { withCredentials: true })
      .pipe(
        tap((data) => {
          this._contacts.next(data);
        }),
      );
  }

  select(contact: Contact): void {
    this._selected.next(contact);
  }
}
