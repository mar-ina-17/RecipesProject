import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as helpers from '../../shared/helper.functions';
import { Ingredient } from '../../shared/models/shared.models';
import { AuthenticationService } from './../../store/auth/auth.service';
import { ShoppingListFacade } from './store/shopping-list.facade';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ConfirmationService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  shoppingListSub: Subscription = Subscription.EMPTY;

  constructor(
    private facade: ShoppingListFacade,
    private confirmService: ConfirmationService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.facade.loadShoppingList();
    this.shoppingListSub = this.facade.shoppingList$.subscribe(
      (data: Ingredient[]) => {
        if (data && data.length) {
          this.ingredients = data;
        } else {
          this.ingredients = [];
        }
      }
    );
  }
  hasRights() {
    return this.auth.isAdmin();
  }
  addIngredient(ing: Ingredient) {
    if (helpers.ingExists(this.ingredients, ing.name)) {
      let ingredientCopy = {
        ...this.ingredients[helpers.existsOnIndex(this.ingredients, ing.name)],
      };
      ingredientCopy.amount += ing.amount;
      this.facade.updateIngredient(ingredientCopy);
    } else {
      this.facade.addIngredient(ing);
    }
    this.facade.loadShoppingList();
  }

  deleteIngredient(id): void {
    this.confirmService.confirm({
      message: 'Are you sure that you want to delete this ingredient?',
      accept: () => {
        this.facade.deleteIngredient(id);
      },
    });
  }
}
