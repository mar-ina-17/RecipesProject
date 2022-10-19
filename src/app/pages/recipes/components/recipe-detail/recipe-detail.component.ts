import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '../../../../shared/models/shared.models';
import { RecipesFacade } from './../../store/recipe.facade';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Output() deleteRecipeOutput = new EventEmitter();

  selectedOption: Option | undefined;
  displayDialog: boolean = false;

  recipeOptions: Option[] = [
    { name: 'Options', index: 0 },
    { name: 'Add to shopping list', index: 1 },
    { name: 'Edit', index: 2 },
    { name: 'Delete', index: 3 },
  ];

  constructor(public readonly facade: RecipesFacade) {}
  ngOnInit(): void {}

  triggerOptionsAction() {
    switch (this.selectedOption.index) {
      case 1: {
        break;
      }
      case 2: {
        this.displayDialog = true;
        break;
      }
      case 3: {
        this.deleteRecipeOutput.emit(this.facade.selectedRecipe);
        break;
      }
    }
  }

  onDialogClose(state: boolean) {
    this.selectedOption = this.recipeOptions[0];
    this.displayDialog = state;
  }
}
