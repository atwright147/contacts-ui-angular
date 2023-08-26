import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {
  id: number;
  readonly form: FormGroup;

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly notificationsService: NotificationsService,
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
      isFavourite: this.fb.control(false, []),
    });

    if (this.id) {
      this.form.addControl('id', this.fb.control(this.id));
    }
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
    }
  }

  onSubmit(): void {
    let METHOD = 'POST';
    if (this.id) {
      METHOD = 'PUT';
    }

    this.http.request(METHOD, '/api/v1/contacts', { body: this.form.value }).subscribe(
      () => this.notificationsService.success('Contact saved'),
      (err) => this.notificationsService.error(err.message),
    );
  }
}
