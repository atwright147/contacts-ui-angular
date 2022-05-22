import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Contact } from '../../types/contact.types';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly searchForm: FormGroup;
  private readonly url = '/api/v1/contacts';

  private readonly _contacts = new BehaviorSubject<Contact[]>([]);
  readonly contacts$ = this._contacts.asObservable();

  private readonly _selected = new BehaviorSubject<Contact>({} as Contact);
  readonly selected$ = this._selected.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
  ) {
    this.searchForm = this.fb.group({
      term: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    });
  }

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
