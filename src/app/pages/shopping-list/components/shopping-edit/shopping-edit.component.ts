import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/pages/shopping-list/shopping-list.services';
import { Ingredient } from '../../../../shared/models/shared.models';

export interface Action {
  name: string;
  command(): any;
}

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private list: ShoppingListService) {}
  ngOnInit(): void {}

  addIngredientToShoppingList(ingredient: Ingredient) {
    console.log(ingredient);
    this.list.addIngredientService(ingredient);
  }
}
