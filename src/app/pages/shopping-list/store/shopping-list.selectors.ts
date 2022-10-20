import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { ShoppingListState } from './shopping-list.state';

export const shoppingListSelector = (state: AppState) => state.ingredients;

export const getShoppingListIngredients = createSelector(
  shoppingListSelector,
  (state: ShoppingListState) => state.ingredients
);
export const getShoppingListReady = createSelector(
  shoppingListSelector,
  (state: ShoppingListState) => state.isReady
);
