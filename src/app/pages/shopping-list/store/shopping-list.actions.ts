import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const fetchShoppingList = createAction(
  '[FETCH SHOPPING LIST] Fetching shopping list...'
);
export const fetchShoppingListError = createAction(
  '[FETCH SHOPPING LIST ERROR] Fetching shopping list failed'
);

export const fetchShoppingListSuccess = createAction(
  '[FETCH SHOPPING LIST SUCCESS] Fetching shopping list - successful',
  props<{ ingredients: Ingredient[] }>()
);

export const addIngredient = createAction(
  '[ADD INGREDIENT] Adding ingredient...',
  props<{ ingredient: Ingredient }>()
);

export const addIngredientSuccess = createAction(
  '[ADD INGREDIENT SUCCESS] Adding ingredient - successful'
);

export const deleteIngredient = createAction(
  '[DELETE INGREDIENT] Deleting ingredient...',
  props<{ id: number }>()
);

export const deleteIngredientSuccess = createAction(
  '[DELETE INGREDIENT SUCCESS] Deleting ingredient - successful'
);
