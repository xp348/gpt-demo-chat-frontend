import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URL } from '../tokens/base-url.token';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(API_URL) private baseUrl: string) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: `${this.baseUrl}${request.url}` });
    return next.handle(apiReq);
  }
}
