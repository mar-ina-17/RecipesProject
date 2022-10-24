import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/shared.models';
import * as helpers from '../../../shared/helper.functions';
import { AppState } from './../../../store/app.reducers';
import * as shoppingListActions from './shopping-list.actions';
import * as shoppingListSelectors from './shopping-list.selectors';
@Injectable()
export class ShoppingListFacade {
  public readonly shoppingList$: Observable<Ingredient[]> = this.store.pipe(
    select(shoppingListSelectors.getShoppingListIngredients)
  );

  constructor(private readonly store: Store<AppState>) {}
  public loadShoppingList(): void {
    this.store.dispatch(shoppingListActions.fetchShoppingList());
  }
  public addIngredient(ingredient: Ingredient) {
    if (!ingredient.id) helpers.generateId(0, 100);

    this.store.dispatch(
      shoppingListActions.addIngredient({ ingredient: ingredient })
    );
  }

  public updateIngredient(ingredient: Ingredient) {
    this.store.dispatch(
      shoppingListActions.updateIngredient({ ingredient: ingredient })
    );
  }

  public deleteIngredient(id: number) {
    this.store.dispatch(shoppingListActions.deleteIngredient({ id: id }));
  }
}
