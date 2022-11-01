import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ShoppingListState,
  SHOPPING_LIST_FEATURE_NAME,
} from './shopping-list.state';

export const shoppingListState = createFeatureSelector<ShoppingListState>(
  SHOPPING_LIST_FEATURE_NAME
);
export const getShoppingListIngredients = createSelector(
  shoppingListState,
  (state: ShoppingListState) => state.ingredients
);
export const getShoppingListReady = createSelector(
  shoppingListState,
  (state: ShoppingListState) => state.isReady
);
