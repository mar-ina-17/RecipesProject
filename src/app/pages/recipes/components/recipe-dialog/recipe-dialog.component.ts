import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/pages/recipes/recipe.service';
import { Recipe } from 'src/app/shared/models/recipe.model';
import * as HelperFunctions from '../../../../shared/helper.functions';
import { Ingredient } from '../../../../shared/models/ingredient.model';
@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss'],
})
export class RecipeDialogComponent implements OnInit {
  @Input() display: boolean;
  @Output() dialogOutput = new EventEmitter();
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  closeDialogEmit() {
    this.dialogOutput.emit();
  }
  /*ngOnDestroy() {
    this.dialogOutput.unsubscribe();
  }*/

  deleteIngredient(ingredient: Ingredient) {
    this.recipe.ingredients.splice(
      this.recipe.ingredients.indexOf(ingredient),
      1
    );
  }

  addIngredientToRecipe(ingredient: Ingredient) {
    if (
      !HelperFunctions.exists(this.recipe.ingredients, {
        name: ingredient.name,
      })
    )
      this.recipe.ingredients.push(ingredient);
  }

  saveRecipeChanges() {
    console.log('this.recipe: ', this.recipe);
    this.recipeService.addRecipe(this.recipe);
    this.display = false;
  }
}
