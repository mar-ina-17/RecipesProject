import { Component, OnInit } from '@angular/core';
import { Option } from '../../../../shared/models/shared.models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  selectedOption: Option | undefined;
  displayDialog: boolean = false;

  recipeOptions: Option[] = [
    { name: 'Options', index: 0 },
    { name: 'Add to shopping list', index: 1 },
    { name: 'Edit', index: 2 },
    { name: 'Delete', index: 3 },
  ];

  constructor() {}
  ngOnInit(): void {}

  triggerOptionsAction() {
    switch (this.selectedOption.index) {
      case 1: {
        break;
      }
      case 2: {
        this.displayDialog = true;
        // this.recipeCopy = JSON.parse(JSON.stringify(this.recipe));
        break;
      }
      case 3: {
        break;
      }
    }
  }

  onDialogClose(state: boolean) {
    this.selectedOption = this.recipeOptions[0];
    this.displayDialog = state;
  }
}
