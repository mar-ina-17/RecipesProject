import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Ingredient } from 'src/app/store/models/ingredient.model';
import { ShoppingListService } from './../../store/services/shopping-list.services';

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

  deleteIngredient = (name: string): void => {
    this.confirmService.confirm({
      message: 'Are you sure that you want todelete this ingredient?',
      accept: () => {
        this.list.deleteIngredientService(name);
      },
    });
  };
}
