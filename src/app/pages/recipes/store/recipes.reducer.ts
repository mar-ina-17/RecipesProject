import { Action, createReducer, on } from '@ngrx/store';
import * as RecipesActions from './recipes.actions';
import * as fromRecipesState from './recipes.state';

const recipes_reducer = createReducer(
  fromRecipesState.initialState,
  on(RecipesActions.fetchRecipesSuccess, (state, { recipes }) => ({
    ...state,
    recipes: recipes,
    isReady: true,
  })),
  on(RecipesActions.fetchRecipesFailure, (state) => ({
    ...state,
    recipes: [],
    isReady: false,
  })),

  on(RecipesActions.addRecipeSuccess, (state, action) => ({
    ...state,
    recipes: state.recipes.concat(action.recipe),
  })),

  on(RecipesActions.deleteRecipeSuccess, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((recipe) => {
      recipe.id !== action.id;
    }),
  })),

  on(RecipesActions.updateRecipeSuccess, (state, action) => ({
    ...state,
    recipes: state.recipes.map((recipe) => {
      return recipe.id === action.id ? { ...action.recipe } : recipe;
    }),
  }))
);

export function recipesReducer(
  state: fromRecipesState.RecipesState,
  action: Action
) {
  return recipes_reducer(state, action);
}
