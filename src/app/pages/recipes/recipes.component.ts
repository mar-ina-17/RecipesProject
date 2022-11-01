import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipesFacade } from './store/recipe.facade';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: boolean;
  recipes: Recipe[];

  private recipeSub: Subscription = Subscription.EMPTY;

  constructor(private facade: RecipesFacade) {}

  ngOnInit(): void {
    this.facade.loadRecipes();
    this.recipeSub = this.facade.recipes$.subscribe((data) => {
      if (data && data.length) {
        this.recipes = data;
      } else {
        this.recipes = [];
      }
    });
  }
  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
  deleteRecipe(e) {
    this.facade.deleteRecipe(e.id);
    this.selectedRecipe = false;
    this.facade.loadRecipes();
  }
  assignNewRecipe() {
    this.facade.selectedRecipe = new Recipe();
    this.selectedRecipe = false;
  }
  assignSelectedRecipe(e) {
    this.facade.selectRecipe(e);
    this.selectedRecipe = true;
  }
}
