import { Component } from '@angular/core';

import { Notification } from '../../types/notifications.types';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  readonly notifications$ = this.notificationsService.notifications$;

  constructor(
    private readonly notificationsService: NotificationsService,
  ) { }

  remove(notification: Notification): void {
    this.notificationsService.remove(notification);
  }
}
