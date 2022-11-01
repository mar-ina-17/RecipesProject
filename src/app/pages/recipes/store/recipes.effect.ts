import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Recipe } from 'src/app/shared/models/shared.models';

import {
  addRecipe,
  addRecipeSuccess,
  deleteRecipe,
  deleteRecipeSuccess,
  fetchRecipes,
  fetchRecipesFailure,
  fetchRecipesSuccess,
  updateRecipe,
  updateRecipeSuccess,
} from './recipes.actions';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  public readonly fetchRecipes$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRecipes),
      switchMap(() => this.recipesService.getRecipes()),
      map(
        (data: Recipe[]) => fetchRecipesSuccess({ recipes: data }),
        catchError(() => of(fetchRecipesFailure()))
      )
    );
  });

  public updateRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateRecipe),
      switchMap(({ recipe }) =>
        this.recipesService
          .updateRecipe(recipe)
          .pipe(map(() => updateRecipeSuccess()))
      )
    );
  });

  public addRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(addRecipe),
      switchMap(({ recipe }) =>
        this.recipesService
          .addRecipe(recipe)
          .pipe(map(() => addRecipeSuccess()))
      )
    );
  });

  public deleteRecipe$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteRecipe),
      mergeMap(({ id }) =>
        this.recipesService
          .deleteRecipe(id)
          .pipe(map(() => deleteRecipeSuccess()))
      )
    );
  });
}
