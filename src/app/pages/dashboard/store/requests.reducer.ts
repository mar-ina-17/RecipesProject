import { Action, createReducer, on } from '@ngrx/store';
import * as RequestsActions from './requests.actions';
import { initialState, RequestsState } from './requests.state';

const requests_reducer = createReducer(
  initialState,
  on(RequestsActions.fetchRequestsSuccess, (state, { requests }) => ({
    ...state,
    requests: requests,
    isReady: true,
  })),
  on(RequestsActions.fetchRequestsFailure, (state) => ({
    ...state,
    requests: [],
    isReady: false,
  })),
  on(RequestsActions.addRequest, (state, action) => ({
    ...state,
    requests: state.requests.concat(action.request),
  })),
  on(RequestsActions.deleteRequest, (state, action) => ({
    ...state,
    requests: state.requests.filter((req) => {
      req.id !== action.id;
    }),
  }))
);

export function requestsReducer(state: RequestsState, action: Action) {
  return requests_reducer(state, action);
}
