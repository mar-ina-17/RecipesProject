import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
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
      ['Tomatoes', 'Potatoes', 'Bread']
    ),
    new Recipe(
      'Recipe 2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
      'https://live.staticflickr.com/65535/48692488766_3787f947e7_b.jpg',
      ['Fish', 'Potatoes', 'Milk']
    ),
    new Recipe(
      'Recipe 3',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      ['Chocolate', 'Cheese', 'Vanilla']
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
