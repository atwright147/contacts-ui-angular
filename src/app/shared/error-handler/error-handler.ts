import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(
    private readonly injector: Injector,
    private readonly zone: NgZone,
  ) { }

  handleError(err): void {
    const router = this.injector.get(Router);

    if (err instanceof HttpErrorResponse) {
      // backend returned unsuccessful response codes such as 404, 500 etc.
      console.info('Backend returned status: ', err.status);
      console.info('Response body:', err.message);

      this.zone.run(() => router.navigateByUrl('/login'));
    } else {
      console.info('An error occurred:', err.message);
    }
  }
}
