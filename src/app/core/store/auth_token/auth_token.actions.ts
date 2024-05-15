import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createSelector,
  props,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const writeDown = createAction(
  '[AUTHTOKEN] writeDown',
  props<{ token: string }>()
);
export const clear = createAction('[AUTHTOKEN] clear');
// export const logOut = createAction(
//   '[COUNTER] log out if token is empty',
//   props<{ updatedAt: number }>()
// );
