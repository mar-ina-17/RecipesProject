import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Ingredient } from 'src/app/store/models/shared.models';
import { ShoppingListService } from 'src/app/store/services/shopping-list.services';

export interface Action {
  name: string;
  command(): any;
}

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
  providers: [MessageService],
})
export class ShoppingEditComponent implements OnInit {
  name: string = '';
  amount: number;

  constructor(
    private list: ShoppingListService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {}

  clearInputs = (): void => {
    this.name = '';
    this.amount = null;
  };

  addIngredient = (): void => {
    if (!this.name || !this.amount) {
      this.messageService.add({
        key: 'warn-key',
        severity: 'error',
        summary: 'Error',
        detail: 'Please, fill in the name and amount of the ingredient! ',
      });
    } else {
      const ingredient =
        this.name && this.amount
          ? new Ingredient(this.name, this.amount)
          : null;
      this.list.addIngredientService(ingredient);
      this.clearInputs();
    }
  };
}
