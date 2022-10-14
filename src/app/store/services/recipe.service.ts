import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Recipe } from '../models/shared.models';
import * as HelperFunctions from './helper.functions';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Vanilla', 5),
        new Ingredient('Chocolate', 10),
      ]
    ),
    new Recipe(
      'Recipe 2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
      'https://live.staticflickr.com/65535/48692488766_3787f947e7_b.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Fish', 5),
        new Ingredient('Bread', 10),
      ]
    ),
    new Recipe(
      'Recipe 3',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      [
        new Ingredient('Potatoes', 1),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Peppers', 10),
      ]
    ),
  ];
  private getIndex(recipe: Recipe): number {
    if (
      HelperFunctions.exists(this.recipes, {
        id: recipe.id,
      })
    ) {
      const index = HelperFunctions.existsOnIndex(this.recipes, {
        id: recipe.id,
      });
      return index;
    }
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(recipe: Recipe): Recipe {
    return this.recipes[this.getIndex(recipe)];
  }

  deleteRecipe(recipe: Recipe) {
    const i = this.getIndex(recipe);
    this.recipes.splice(i, 1);
  }

  addRecipe(recipe: Recipe) {
    const i = this.getIndex(recipe);
    console.log('recipe mod: ', recipe);
    console.log('curr rec: ', this.recipes[i]);
    if (i >= 0 && i < this.recipes.length) {
      this.recipes[i] = recipe;
    } else {
      this.recipes.push(recipe);
    }
  }
}
