import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';

import * as fromLayouts from './layouts.reducer';

export interface State {
  'layouts': fromLayouts.State;
}

export const reducers: ActionReducerMap<{}> = {
  layouts: fromLayouts.reducer
};

export const getLayoutsState = createFeatureSelector<fromLayouts.State>('layouts');

export const getShowSidenav = createSelector(
  getLayoutsState,
  fromLayouts.getShowSidenav
);

export const getModeSidenav = createSelector(
  getLayoutsState,
  fromLayouts.getModeSidenav
);

