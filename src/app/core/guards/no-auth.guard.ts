import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { authTokenSelector } from '../store/auth_token/auth_token.selectors';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}
  authToken$ = this.store.select(authTokenSelector);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authToken$.pipe(
      take(1),
      map((isAuth) => {
        return !Boolean(isAuth);
      })
    );
  }
}
