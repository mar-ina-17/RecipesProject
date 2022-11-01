import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const SHOPPING_LIST_FEATURE_NAME = 'ingredients';

export interface ShoppingListState {
  ingredients: Ingredient[];
  isReady: boolean;
}

export const initialState: ShoppingListState = {
  ingredients: [
    { name: 'Tomatoes', amount: 3, id: 1 },
    { name: 'Bread', amount: 5, id: 2 },
    { name: 'Milk', amount: 1, id: 3 },
  ],
  isReady: false,
};
