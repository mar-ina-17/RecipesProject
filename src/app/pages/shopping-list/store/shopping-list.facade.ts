import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/shared.models';
import * as helpers from '../../../shared/helper.functions';
import {
  addIngredient,
  deleteIngredient,
  fetchShoppingList,
  updateIngredient,
} from './shopping-list.actions';
import * as shoppingListSelectors from './shopping-list.selectors';
import { ShoppingListState } from './shopping-list.state';
@Injectable()
export class ShoppingListFacade {
  public shoppingList$: Observable<Ingredient[]> = this.store.pipe(
    select(shoppingListSelectors.getShoppingListIngredients)
  );
  constructor(private readonly store: Store<ShoppingListState>) {}
  public loadShoppingList(): void {
    this.store.dispatch(fetchShoppingList());
  }

  public addIngredient(ingredient: Ingredient, ings: Ingredient[]) {
    if (!ingredient.id) helpers.generateId(0, 100);
    if (ings && ings.length && helpers.ingExists(ings, ingredient.name)) {
      let ingredientCopy = {
        ...ings[helpers.existsOnIndex(ings, ingredient.name)],
      };
      ingredientCopy.amount += ingredient.amount;
      this.updateIngredient(ingredientCopy);
      this.loadShoppingList();
    } else {
      this.store.dispatch(addIngredient({ ingredient: ingredient }));
    }
    this.loadShoppingList();
  }

  public updateIngredient(ingredient: Ingredient) {
    this.store.dispatch(updateIngredient({ ingredient: ingredient }));
  }

  public deleteIngredient(id: number) {
    this.store.dispatch(deleteIngredient({ id: id }));
  }
}
