import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { recipe_options } from '../../../../shared/models/shared.models';
import { RecipesFacade } from './../../store/recipe.facade';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  providers: [ConfirmationService],
})
export class RecipeDetailComponent implements OnInit {
  @Output() deleteRecipeOutput = new EventEmitter();
  recipeOptions: Array<Object> = recipe_options;
  displayDialog: boolean = false;
  selectedOption;

  constructor(
    public readonly facade: RecipesFacade,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {}

  triggerOptionsAction(e) {
    switch (this.selectedOption.index) {
      case 1: {
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
}
