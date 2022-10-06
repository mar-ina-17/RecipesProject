import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;

  constructor() {}
  ngOnInit(): void {}

  displayRecipe = (recipe: Recipe) => {
    this.currentRecipe = recipe;
  };
}
