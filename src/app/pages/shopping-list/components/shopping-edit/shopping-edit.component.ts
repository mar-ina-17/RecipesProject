import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() addIngredientOutput = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  addIngredientToShoppingList(ingredient: Ingredient) {
    this.addIngredientOutput.emit(ingredient);
  }
}
