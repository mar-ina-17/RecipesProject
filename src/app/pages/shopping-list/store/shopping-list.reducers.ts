import { Action, createReducer, on } from '@ngrx/store';
import * as fromShoppingListActions from './shopping-list.actions';
import * as fromShoppingListState from './shopping-list.state';

const shoppingList_reducer = createReducer(
  fromShoppingListState.initialState,
  on(
    fromShoppingListActions.fetchShoppingListSuccess,
    (state, { ingredients }) => ({
      ...state,
      ingredients: ingredients,
      isReady: true,
    })
  ),
  on(fromShoppingListActions.fetchShoppingListError, (state) => ({
    ...state,
    ingredients: [],
    isReady: false,
  })),
  on(fromShoppingListActions.addIngredient, (state, action) => ({
    ...state,
    igredients: state.ingredients.concat(action.ingredient),
  })),
  on(fromShoppingListActions.deleteIngredient, (state, action) => ({
    ...state,
    ingredients: state.ingredients.filter((ing) => ing.id !== action.id),
  }))
);

export function shoppingListReducer(
  state: fromShoppingListState.ShoppingListState,
  action: Action
) {
  return shoppingList_reducer(state, action);
}
