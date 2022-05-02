import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {
  readonly form: FormGroup;

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
  ) {
    // fixes issue where form was rendering before initiated
    // see: https://github.com/KillerCodeMonkey/ngx-quill/issues/187#issuecomment-695796458
    this.form = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      jobTitle: this.fb.control('', []),
      bio: this.fb.control('', []),
      dateOfBirth: this.fb.control('', []),
      emails: this.fb.array([]),
      addresses: this.fb.array([]),
      comments: this.fb.array([]),
      isFavourite: this.fb.control('', []),
    });
  }

  ngOnInit(): void {
  }

}
