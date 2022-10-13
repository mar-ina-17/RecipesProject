import { Injectable } from '@angular/core';
import { Ingredient } from './../models/shared.models';
import * as helpers from './helper.functions';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoe', 4),
  ];

  getIngredientsService(): Ingredient[] {
    return this.ingredients;
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
  }
  addIngredientService = (ingredient: Ingredient) => {
    if (ingredient && !helpers.exists(ingredient, this.ingredients)) {
      this.ingredients.push(ingredient);
    } else console.log('invalid ingredient argument');
  };

  deleteIngredientService = (name: string) => {
    const index = helpers.existsOnIndex(name, this.ingredients);
    if (name && index != -1) {
      this.ingredients.splice(index, 1);
    } else console.log('invalid ingredient argument');
  };
}
