import { createAction, props } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/shared.models';

export const fetchRecipes = createAction('[FETCH RECIPES] Fetching recipes');
export const fetchRecipesSuccess = createAction(
  '[FETCH RECIPES SUCCESS] Fetching recipes - successful',
  props<{ recipes: Recipe[] }>()
);
export const fetchRecipesFailure = createAction(
  '[FETCH RECIPES ERROR] Fetching recipes - failed',
  props<{ error: string }>()
);
export const saveRecipes = createAction(
  '[SAVE RECIPES] Saving recipes',
  props<{
    recipes: Recipe[];
  }>()
);

export const addRecipe = createAction(
  '[ADD RECIPE] Adding recipe',
  props<{ recipe: Recipe }>()
);

export const deleteRecipe = createAction(
  '[DELETE RECIPE] Deleting recipe',
  props<{ id: number }>()
);

export const updateRecipe = createAction(
  '[UPDATE RECIPE] Updating recipe',
  props<{ id: number; recipe: Recipe }>()
);
