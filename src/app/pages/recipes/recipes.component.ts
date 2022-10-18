import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

import { RecipesFacade } from './store/recipe.facade';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[];

  constructor(private facade: RecipesFacade) {}

  ngOnInit(): void {
    console.log(this.facade.loadRecipes());
  }
}
