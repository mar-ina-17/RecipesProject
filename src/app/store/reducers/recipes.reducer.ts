import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/recipes.actions';

export const initialState = 0;

export function recipesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Save:
      return state + 1;

    case ActionTypes.Edit:
      return state - 1;

    case ActionTypes.Delete:
      return 0;

    default:
      return state;
  }
}
