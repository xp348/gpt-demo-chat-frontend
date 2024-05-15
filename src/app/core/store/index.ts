import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {
  counterFeatureKey,
  counterReducer,
  CounterState,
} from './counter/counter.reducer';
import { CounterEffects } from './counter/counter.effects';
import {
  authTokenFeatureKey,
  authTokenReducer,
  authTokenState,
} from './auth_token/auth_token.reducer';

interface State {
  [counterFeatureKey]: CounterState;
  [authTokenFeatureKey]: authTokenState;
}

export const reducers: ActionReducerMap<State, any> = {
  [counterFeatureKey]: counterReducer,
  [authTokenFeatureKey]: authTokenReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const effects = [CounterEffects];
