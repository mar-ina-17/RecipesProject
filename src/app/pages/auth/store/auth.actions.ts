import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/shared.models';

export const loginUser = createAction(
  '[LOGIN ATTEMPT] Logging in... ',
  props<{ user: User }>()
);

export const loginUserSuccess = createAction(
  '[LOGIN SUCCESS] Login successful '
);

export const loginUserFailure = createAction('[LOGIN FAILED] Login failed!');

export const registerUser = createAction(
  '[REGISTER ATTEMPT] Registration... ',
  props<{ user: User }>()
);

export const registerUserSuccess = createAction(
  '[REGISTER SUCCESS] Registration successful '
);

export const registerUserFailure = createAction(
  '[REGISTER FAILED] Registration failed! '
);
