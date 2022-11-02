import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';
import { Subscription } from 'rxjs';
import { RequestsFacade } from 'src/app/pages/dashboard/store/requests.facade';
import { ShoppingListFacade } from 'src/app/pages/shopping-list/store/shopping-list.facade';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { AuthenticationService } from 'src/app/store/auth/auth.service';
import {
  recipe_options,
  Request,
} from '../../../../shared/models/shared.models';
import { RecipesFacade } from '../../store/recipe.facade';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  providers: [ConfirmationService],
})
export class RecipeDetailComponent implements OnInit {
  @ViewChild(Tooltip) tooltip!: Tooltip;

  @Output() deleteRecipeOutput = new EventEmitter();
  recipeOptions: Array<Object> = recipe_options;
  displayDialog: boolean = false;
  selectedOption;
  isAdminRole: boolean = this._authServ.currentUserRole == 'admin';
  shoppingListSub: Subscription = Subscription.EMPTY;
  ingredients: Ingredient[];

  constructor(
    public readonly facade: RecipesFacade,
    private confirmationService: ConfirmationService,
    private shoppingListFacade: ShoppingListFacade,
    public _authServ: AuthenticationService,
    private requestsFacade: RequestsFacade
  ) {}

  ngOnInit(): void {
    this.shoppingListFacade.loadShoppingList();
    this.shoppingListSub = this.shoppingListFacade.shoppingList$.subscribe(
      (data) => {
        if (data && data.length) {
          this.ingredients = data;
        } else this.ingredients = [];
      }
    );
  }

  ngOnDestroy() {
    this.shoppingListSub.unsubscribe();
  }

  triggerOptionsAction(e) {
    switch (this.selectedOption.index) {
      case 1: {
        this.facade.selectedRecipe.ingredients.map((ing) => {
          this.shoppingListFacade.addIngredient(ing, this.ingredients);
        });
        break;
      }
      case 2: {
        this.displayDialog = true;
        break;
      }
      case 3: {
        this.confirmationService.confirm({
          target: e.originalEvent.target.parentElement,
          message: 'Are you sure you want to delete this recipe?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.deleteRecipeOutput.emit(this.facade.selectedRecipe);
          },
          reject: () => {
            this.selectedOption = this.recipeOptions[0];
          },
        });
        break;
      }
    }
  }

  onDialogClose(dialogStatus: boolean) {
    this.selectedOption = this.recipeOptions[0];
    this.displayDialog = dialogStatus;
  }

  addRequest() {
    this.tooltip.activate();
    const req = new Request(
      this.facade.selectedRecipe.name,
      this._authServ.currentUserName,
      new Date()
    );
    this.requestsFacade.addRequest(req);
  }
}
