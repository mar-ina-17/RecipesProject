import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import * as shoppingListActions from './shopping-list.actions';
import { ShoppingListService } from './shopping-list.service';

@Injectable({ providedIn: 'root' })
export class ShoppingListEffect {
  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) {}
  public readonly fetchIngredients$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingListActions.fetchShoppingList),
      switchMap(() => this.shoppingListService.getShoppingList()),
      map(
        (data: Ingredient[]) =>
          shoppingListActions.fetchShoppingListSuccess({
            ingredients: data,
          }),
        catchError(() => of(shoppingListActions.fetchShoppingListError()))
      )
    );
  });

  public addIngredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingListActions.addIngredient),
      switchMap(({ ingredient }) =>
        this.shoppingListService.addIngredient(ingredient)
      ),
      map(() => shoppingListActions.addIngredientSuccess())
    );
  });

  public deleteIndgredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingListActions.deleteIngredient),
      switchMap(({ id }) => this.shoppingListService.deleteIngredient(id)),
      map(() => shoppingListActions.deleteIngredientSuccess())
    );
  });

  public updateIngredient$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(shoppingListActions.updateIngredient),
      switchMap(({ ingredient }) =>
        this.shoppingListService.updateIngredient(ingredient)
      ),
      map(() => shoppingListActions.updateIngredientSuccess())
    );
  });
}
