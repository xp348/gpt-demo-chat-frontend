import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { changeUpdatedAt, clear, decrease, increase } from './counter.actions';
import { map } from 'rxjs';

@Injectable()
export class CounterEffects {
  updatedAt$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increase, decrease, clear),
        map(() => changeUpdatedAt({ updatedAt: Date.now() }))
      )
    // { dispatch: false }
  );
  constructor(private actions$: Actions) {}
}
