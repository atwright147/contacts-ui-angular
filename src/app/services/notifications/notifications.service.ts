import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';

import { Notification } from '../../types/notifications.types';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly _notifications = new BehaviorSubject<Notification[]>([]);
  readonly notifications$ = this._notifications.asObservable();

  constructor() { }

  add(notification: Omit<Notification, 'id'>): void {
    const newNotification = { ...notification, id: uuid.v4() };
    this._notifications.next([...this._notifications.value, newNotification]);
  }

  info(body: string): void {
    this.add({ type: 'info', body });
  }

  success(body: string): void {
    this.add({ type: 'success', body });
  }

  warning(body: string): void {
    this.add({ type: 'warning', body });
  }

  error(body: string): void {
    this.add({ type: 'error', body });
  }

  remove(notification: Notification): void {
    this._notifications.next(this._notifications.value.filter(n => n.id !== notification.id));
  }

  clear(): void {
    this._notifications.next([]);
  }
}
