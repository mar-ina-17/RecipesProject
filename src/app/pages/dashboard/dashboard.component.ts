import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from './../../shared/models/ingredient.model';
import { RecipesFacade } from './../recipes/store/recipe.facade';
import { ShoppingListFacade } from './../shopping-list/store/shopping-list.facade';
import { RequestsFacade } from './store/requests.facade';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  requests = [];
  ingredients: Ingredient[] = [];
  private requestsSub: Subscription = Subscription.EMPTY;
  private shoppingListSub: Subscription = Subscription.EMPTY;
  constructor(
    private facade: RequestsFacade,
    private shoppingListFacade: ShoppingListFacade,
    private recipesFacade: RecipesFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.facade.loadRequests();
    this.shoppingListFacade.loadShoppingList();

    this.requestsSub = this.facade.requests$.subscribe((data) => {
      if (data && data.length) {
        this.requests = data;
      } else {
        this.requests = [];
      }
    });
    this.shoppingListSub = this.shoppingListFacade.shoppingList$.subscribe(
      (data) => {
        if (data && data.length) {
          this.ingredients = data;
        } else this.ingredients = [];
      }
    );
  }
  ngOnDestroy() {
    this.requestsSub.unsubscribe();
    this.shoppingListSub.unsubscribe();
  }

  deleteRequest(id) {
    this.facade.deleteRequest(id);
    this.facade.loadRequests();
  }

  approveRequest(id, name) {
    this.recipesFacade.recipes$.subscribe((recipes) => {
      recipes.map((recipe) => {
        if (recipe.name == name) {
          recipe.ingredients.forEach((ing: Ingredient) => {
            this.shoppingListFacade.addIngredient(ing, this.ingredients);
          });
        }
      });
    });
    this.deleteRequest(id);

    this.router.navigateByUrl('shopping-list');
  }
}
