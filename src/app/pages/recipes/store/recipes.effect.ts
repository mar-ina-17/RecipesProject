import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Recipe } from 'src/app/shared/models/shared.models';

import * as recipeActions from './recipes.actions';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  public readonly fetchRecipes$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(recipeActions.fetchRecipes),
      switchMap(() => this.recipesService.getRecipes()),
      map(
        (data: Recipe[]) =>
          recipeActions.fetchRecipesSuccess({ recipes: data }),
        catchError(() => of(recipeActions.fetchRecipesFailure()))
      )
    );
  });

  public updateRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(recipeActions.updateRecipe),
      switchMap(({ recipe }) =>
        this.recipesService
          .updateRecipe(recipe)
          .pipe(map(() => recipeActions.updateRecipeSuccess()))
      )
    );
  });

  public addRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(recipeActions.addRecipe),
      switchMap(({ recipe }) =>
        this.recipesService
          .addRecipe(recipe)
          .pipe(map(() => recipeActions.addRecipeSuccess()))
      )
    );
  });

  public deleteRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(recipeActions.deleteRecipe),
      mergeMap(({ id }) =>
        this.recipesService
          .deleteRecipe(id)
          .pipe(map(() => recipeActions.deleteRecipeSuccess()))
      )
    );
  });
}
