import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { initialState } from './auth.state';
export const auth_reducers = createReducer(
  initialState,
  on(AuthActions.loginUser, (state, { user }) => ({
    ...state,
    currentUser: user,
    isReady: true,
  })),
  on(AuthActions.registerUser, (state) => ({
    ...state,
  }))
);
