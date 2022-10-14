import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Ingredient } from '../../shared/models/shared.models';
import { ShoppingListService } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ConfirmationService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(
    private list: ShoppingListService,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.list.getIngredientsService();
  }

  deleteIngredient(id): void {
    this.confirmService.confirm({
      message: 'Are you sure that you want to delete this ingredient?',
      accept: () => {
        this.list.deleteIngredientService(id);
      },
    });
  }
}
