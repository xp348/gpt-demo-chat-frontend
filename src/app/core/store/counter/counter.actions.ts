import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createSelector,
  props,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{ updatedAt: number }>()
);
