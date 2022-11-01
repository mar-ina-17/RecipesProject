import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';
import { AuthenticationService } from 'src/app/store/auth/auth.service';
import {
  recipe_options,
  Request,
} from '../../../../shared/models/shared.models';
import { RequestsFacade } from './../../../dashboard/store/requests.facade';
import { ShoppingListFacade } from './../../../shopping-list/store/shopping-list.facade';
import { RecipesFacade } from './../../store/recipe.facade';
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

  constructor(
    public readonly facade: RecipesFacade,
    private confirmationService: ConfirmationService,
    private shoppingListFacade: ShoppingListFacade,
    public _authServ: AuthenticationService,
    private requestsFacade: RequestsFacade
  ) {}
  ngOnInit(): void {}

  triggerOptionsAction(e) {
    switch (this.selectedOption.index) {
      case 1: {
        this.facade.selectedRecipe.ingredients.map((ing) => {
          this.shoppingListFacade.addIngredient(ing);
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
