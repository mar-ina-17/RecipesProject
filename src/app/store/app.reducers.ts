import * as fromRecipes from '../pages/recipes/store/recipes.state';
import * as fromShoppingList from '../pages/shopping-list/store/shopping-list.state';
export interface AppState {
  recipes: fromRecipes.RecipesState;
  ingredients: fromShoppingList.ShoppingListState;
}
