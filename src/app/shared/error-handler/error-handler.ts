import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from '../../services/notifications/notifications.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(
    private readonly injector: Injector,
    private readonly zone: NgZone,
  ) { }

  handleError(err): void {
    const router = this.injector.get(Router);
    const notificationsService = this.injector.get(NotificationsService);

    if (err instanceof HttpErrorResponse) {
      notificationsService.error(err.message);

      this.zone.run(() => {
        localStorage.setItem('previousRoute', location.pathname);
        router.navigateByUrl('/login');
      });
    } else {
      notificationsService.error(err.message);
    }
  }
}
