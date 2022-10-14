import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/pages/recipes/recipe.service';
import { Ingredient } from 'src/app/shared/models/shared.models';
import { Option, Recipe } from '../../../../shared/models/shared.models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe();
  @Output() deleteRecipeOutput = new EventEmitter<Recipe>();
  @Output() addToShoppingListOutput = new EventEmitter<Ingredient[]>();
  recipeCopy: Recipe = new Recipe();

  selectedOption: Option | undefined;
  displayDialog: boolean = false;

  recipeOptions: Option[] = [
    { name: 'Options', index: 0 },
    { name: 'Add to shopping list', index: 1 },
    { name: 'Edit', index: 2 },
    { name: 'Delete', index: 3 },
  ];

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  triggerOptionsAction() {
    switch (this.selectedOption.index) {
      case 1: {
        this.addToShoppingListOutput.emit(this.recipe.ingredients);
        break;
      }
      case 2: {
        this.displayDialog = true;
        this.recipeCopy = JSON.parse(JSON.stringify(this.recipe));
        break;
      }
      case 3: {
        this.deleteRecipeOutput.emit(this.recipe);
        break;
      }
    }
  }

  onDialogClose(state: boolean) {
    this.selectedOption = this.recipeOptions[0];
    this.displayDialog = state;
    this.recipe = this.recipeService.getRecipe(this.recipe);
  }
}
