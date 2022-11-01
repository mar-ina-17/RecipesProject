import { RequestsState, REQUESTS_FEATURE_NAME } from './requests.state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRequestsState = createFeatureSelector(REQUESTS_FEATURE_NAME);
export const getRequests = createSelector(
  getRequestsState,
  (state: RequestsState) => state.requests
);
