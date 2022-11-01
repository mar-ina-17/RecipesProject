import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesState, RECIPE_FEATURE_NAME } from './recipes.state';

export const getRecipesState =
  createFeatureSelector<RecipesState>(RECIPE_FEATURE_NAME);
export const getAllRecipes = createSelector(
  getRecipesState,
  (state: RecipesState) => state.recipes
);
export const getRecipesReady = createSelector(
  getRecipesState,
  (state: RecipesState) => state.isReady
);
