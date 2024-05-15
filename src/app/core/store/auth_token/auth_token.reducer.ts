import { createReducer, on } from '@ngrx/store';
import { clear, writeDown } from './auth_token.actions';

export const authTokenFeatureKey = 'auth_token';

export const initialState = null as string | null;

export type authTokenState = typeof initialState;

export const authTokenReducer = createReducer(
  initialState,
  on(writeDown, (state, action) => action.token),
  on(clear, (state) => null)
  // on(changeUpdatedAt, (state, action) => ({
  //   ...state,
  //   updatedAt: action.updatedAt,
  // }))
);
