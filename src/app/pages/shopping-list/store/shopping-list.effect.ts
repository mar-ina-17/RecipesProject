import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import {
  addIngredient,
  addIngredientSuccess,
  deleteIngredient,
  deleteIngredientSuccess,
  fetchShoppingList,
  fetchShoppingListError,
  fetchShoppingListSuccess,
  updateIngredient,
  updateIngredientSuccess,
} from './shopping-list.actions';
import { ShoppingListService } from './shopping-list.service';

@Injectable({ providedIn: 'root' })
export class ShoppingListEffect {
  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) {}
  public readonly fetchIngredients$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchShoppingList),
      switchMap(() => this.shoppingListService.getShoppingList()),
      map(
        (data: Ingredient[]) =>
          fetchShoppingListSuccess({
            ingredients: data,
          }),
        catchError(() => of(fetchShoppingListError()))
      )
    );
  });

  public addIngredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(addIngredient),
      switchMap(({ ingredient }) =>
        this.shoppingListService.addIngredient(ingredient)
      ),
      map(() => addIngredientSuccess())
    );
  });

  public deleteIndgredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteIngredient),
      switchMap(({ id }) => this.shoppingListService.deleteIngredient(id)),
      map(() => deleteIngredientSuccess())
    );
  });

  public updateIngredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateIngredient),
      switchMap(({ ingredient }) =>
        this.shoppingListService.updateIngredient(ingredient)
      ),
      map(() => updateIngredientSuccess())
    );
  });
}
