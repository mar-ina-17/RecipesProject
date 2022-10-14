import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/pages/recipes/recipe.service';
import { Ingredient, Recipe } from '../../shared/models/shared.models';
import { ShoppingListService } from '../shopping-list/shopping-list.services';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {
    this.getRecipesFromStore();
  }

  getRecipesFromStore() {
    this.recipes = this.recipeService.getRecipes();
  }
  assignSelectedRecipe(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.selectedRecipe = null;
    this.getRecipesFromStore();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
