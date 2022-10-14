import { Injectable } from '@angular/core';
import * as helpers from '../../shared/helper.functions';
import { Ingredient } from '../../shared/models/shared.models';

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
    ingredients.forEach((ing) => {
      this.addIngredientService(ing);
    });
  }
  addIngredientService = (ingredient: Ingredient) => {
    console.log(helpers.exists(this.ingredients, { name: ingredient.name }));
    if (!helpers.exists(this.ingredients, { name: ingredient.name })) {
      this.ingredients.push(ingredient);
    } else {
      const i = helpers.existsOnIndex(this.ingredients, {
        name: ingredient.name,
      });
      this.ingredients[i].amount += ingredient.amount;
    }
  };

  deleteIngredientService = (id: number) => {
    const index = helpers.existsOnIndex(this.ingredients, { id: id });
    if (id && index != -1) {
      this.ingredients.splice(index, 1);
    } else console.log('invalid ingredient argument');
  };
}
