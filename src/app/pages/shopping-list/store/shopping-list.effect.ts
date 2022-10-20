import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, Observable, switchMap } from 'rxjs';
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
        (data: Ingredient[]) => {
          console.log(data);
          return shoppingListActions.fetchShoppingListSuccess({
            ingredients: data,
          });
        }
        //catchError((error: string | null) =>
        // of(shoppingListActions.fetchShoppingListError())
        //)
      )
    );
  });
}
