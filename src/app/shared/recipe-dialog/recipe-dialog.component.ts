import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/store/models/recipe.model';
import { RecipeService } from 'src/app/store/services/recipe.service';
import * as HelperFunctions from '../../store/services/helper.functions';
import { Ingredient } from './../../store/models/ingredient.model';
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
  ngOnDestroy() {
    this.dialogOutput.unsubscribe();
  }

  deleteIngredient(ingredient: Ingredient) {
    this.recipe.ingredients.splice(
      this.recipe.ingredients.indexOf(ingredient),
      1
    );
  }

  addIngredientToRecipe(ingredient: Ingredient) {
    if (!HelperFunctions.exists(ingredient, this.recipe.ingredients))
      this.recipe.ingredients.push(ingredient);
  }

  saveRecipeChanges() {
    this.recipeService.addRecipe(this.recipe);
    this.display = false;
  }
}
