import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { authTokenSelector } from '../store/auth_token/auth_token.selectors';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store) {}
  authToken$ = this.store.select(authTokenSelector);
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authToken$.pipe(
      switchMap((authToken) => {
        const apiReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        return next.handle(apiReq);
      })
    );
  }
}
