import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/store/services/recipe.service';
import { Recipe } from '../../../../store/models/shared.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedOutput = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[] = [];
  displayDialog: boolean = false;
  newRecipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.onSelectedOutput.emit(recipe);
  }

  onDialogClose() {
    this.newRecipe = new Recipe();
    this.displayDialog = false;
    this.recipes = this.recipeService.getRecipes();
  }
}
