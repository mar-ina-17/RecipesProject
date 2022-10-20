import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/shared.models';
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
}
