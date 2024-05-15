import { createReducer, on } from '@ngrx/store';
import { changeUpdatedAt, clear, decrease, increase } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 10,
} as const;

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({ ...state, count: state.count + 1 })),
  on(decrease, (state) => ({ ...state, count: state.count - 1 })),
  on(clear, (state) => ({ ...state, count: 0 })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt,
  }))
);
