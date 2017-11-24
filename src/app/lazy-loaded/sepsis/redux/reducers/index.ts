import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../reducers/index';
import * as fromRecommendations from './recommendations-page.reducer';

export interface SepsisState {
  recommendations: fromRecommendations.State;
}

export interface State extends fromRoot.State {
  'sepsis': SepsisState;
}

export const reducers = {
  recommendations: fromRecommendations.reducer
};

export const getSepsisState = createFeatureSelector<SepsisState>('sepsis');

export const getRecommendationsState = createSelector(
  getSepsisState,
  state => state.recommendations
);

export const getRecommendationsContent = createSelector(
  getRecommendationsState,
  state => state.content
);

export const getRecommendationsLoaded = createSelector(
  getRecommendationsState,
  state => state.loaded
);
