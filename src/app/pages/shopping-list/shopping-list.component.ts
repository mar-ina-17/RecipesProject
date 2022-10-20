import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/shared.models';
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
    private confirmService: ConfirmationService
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
        console.log('data', data);
      }
    );
  }

  deleteIngredient(id): void {
    /*this.confirmService.confirm({
      message: 'Are you sure that you want to delete this ingredient?',
      accept: () => {
        this.list.deleteIngredientService(id);
      },
    });*/
  }
}
