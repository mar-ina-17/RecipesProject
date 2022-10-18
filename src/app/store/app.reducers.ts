import * as fromRecipes from '../pages/recipes/store/recipes.state';

export interface AppState {
  recipes: fromRecipes.RecipesState;
}
