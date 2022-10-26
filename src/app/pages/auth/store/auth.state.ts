import { User } from 'src/app/shared/models/shared.models';

export const AUTH_FEATURE_NAME = 'users';

export interface UsersState {
  currentUser: User;
  isReady: boolean;
}

export const initialState: UsersState = {
  currentUser: new User(),
  isReady: false,
};
