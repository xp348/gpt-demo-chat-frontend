import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, counterFeatureKey } from './counter.reducer';

export const featureSelector =
  createFeatureSelector<CounterState>(counterFeatureKey);

export const countSelector = createSelector(
  featureSelector,
  (state) => state.count
);
export const updatedAtSelector = createSelector(
  featureSelector,
  (state) => state.updatedAt
);
