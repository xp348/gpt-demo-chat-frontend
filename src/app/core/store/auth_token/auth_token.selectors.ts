import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authTokenFeatureKey, authTokenState } from './auth_token.reducer';

export const featureSelector =
  createFeatureSelector<authTokenState>(authTokenFeatureKey);

export const authTokenSelector = createSelector(
  featureSelector,
  (state) => state
);
// export const updatedAtSelector = createSelector(
//   featureSelector,
//   (state) => state.updatedAt
// );
