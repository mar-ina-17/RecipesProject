import { createSelector } from '@ngrx/store';
import { AppState } from './../../../store/app.reducers';
import { RecipesState } from './recipes.state';

export const selectRecipes = (state: AppState) => state.recipes;
export const getAllRecipes = createSelector(
  selectRecipes,
  (state: RecipesState) => state.recipes
);

export const getRecipesReady = createSelector(
  selectRecipes,
  (state: RecipesState) => state.isReady
);
