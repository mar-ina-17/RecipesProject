import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/shared.models';
import * as recipeActions from './recipes.actions';
import * as recipeSelectors from './recipes.selectors';
import { RecipesState } from './recipes.state';

@Injectable({ providedIn: 'root' })
export class RecipesFacade {
  public readonly recipes$: Observable<Recipe[]> = this.store.pipe(
    select(recipeSelectors.getAllRecipes)
  );

  public selectedRecipe: Recipe = new Recipe();

  constructor(private readonly store: Store<RecipesState>) {}

  public loadRecipes(): void {
    this.store.dispatch(recipeActions.fetchRecipes());
  }

  public selectRecipe(recipe) {
    this.selectedRecipe = JSON.parse(JSON.stringify(recipe));
    this.selectedRecipe.ingredients = [...recipe.ingredients];
  }
  public discardChanges(recipe) {
    this.selectRecipe(recipe);
  }
  public updateRecipe(recipe) {
    this.store.dispatch(
      recipeActions.updateRecipe({ id: recipe.id, recipe: recipe })
    );
  }
  public addRecipe(recipe) {
    recipe.id = Math.floor(Math.random() * (1000 - 100) + 100);
    this.store.dispatch(recipeActions.addRecipe({ recipe: recipe }));
  }

  public deleteRecipe(id) {
    this.store.dispatch(recipeActions.deleteRecipe({ id: id }));
    this.selectedRecipe = new Recipe();
  }
}
