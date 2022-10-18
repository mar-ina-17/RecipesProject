import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/shared.models';
import { AppState } from './../../../store/app.reducers';
import * as recipeActions from './recipes.actions';
import * as recipeSelectors from './recipes.selectors';
import { RecipesService } from './recipes.service';

@Injectable()
export class RecipesFacade {
  public readonly recipes$: Observable<Recipe[]> = this.store.pipe(
    select(recipeSelectors.getAllRecipes)
  );

  constructor(
    private readonly store: Store<AppState>,
    private _recipesService: RecipesService
  ) {}
  public loadRecipes(): void {
    this.store.dispatch(recipeActions.fetchRecipes());
  }
  /*public load() {
    this._recipesService.getRecipes().subscribe({
      next: (recipes) => {
        console.log(recipes);
      },
    });
  }

  public loadRecipes(): void {
    this.store.dispatch(recipeActions.fetchRecipes());
  }*/
}
