import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient, Recipe } from 'src/app/shared/models/shared.models';
import * as helpers from '../../../../shared/helper.functions';
import { RecipesFacade } from './../../store/recipe.facade';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss'],
})
export class RecipeDialogComponent implements OnInit {
  @Input() display: boolean;
  @Output() dialogOutput = new EventEmitter();

  recipeCopy: Recipe = new Recipe();

  constructor(private facade: RecipesFacade) {}

  ngOnInit(): void {}

  assignRecipeCopy() {
    if (this.facade.selectedRecipe.id) {
      this.recipeCopy = JSON.parse(JSON.stringify(this.facade.selectedRecipe));
      this.recipeCopy.ingredients = JSON.parse(
        JSON.stringify(this.facade.selectedRecipe.ingredients)
      );
    }
  }

  closeDialogEmit() {
    this.dialogOutput.emit();
  }

  deleteIngredient(ingredient: Ingredient) {
    this.recipeCopy.ingredients.splice(
      this.recipeCopy.ingredients.indexOf(ingredient),
      1
    );
  }

  addIngredientToRecipe(ingredient: Ingredient) {
    let exists = helpers.ingExists(
      this.recipeCopy.ingredients,
      ingredient.name
    );
    let index = helpers.existsOnIndex(this.recipeCopy.ingredients, {
      name: ingredient.name,
    });
    if (exists) this.recipeCopy.ingredients[index].amount += ingredient.amount;
    else this.recipeCopy.ingredients.push(ingredient);
  }

  saveRecipeChanges() {
    if (this.recipeCopy.id) {
      this.facade.updateRecipe(this.recipeCopy);
      this.facade.selectRecipe(this.recipeCopy);
    } else {
      console.log('save new recipe');
      this.facade.addRecipe(this.recipeCopy);
    }
    this.display = false;
  }
}
