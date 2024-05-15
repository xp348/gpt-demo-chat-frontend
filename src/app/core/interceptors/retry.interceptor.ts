import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  mergeMap,
  retryWhen,
  throwError,
  timer,
} from 'rxjs';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, retryCount) => {
            if (retryCount < 2) {
              return timer(retryCount * retryCount * 2000);
            } else {
              return throwError(error);
            }
          })
        )
      )
    );
  }
}
