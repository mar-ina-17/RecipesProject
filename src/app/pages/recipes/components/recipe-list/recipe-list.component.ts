import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../../shared/models/shared.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedOutput = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[] = [];
  displayDialog: boolean = false;
  newRecipe: Recipe;

  constructor() {}
  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.onSelectedOutput.emit(recipe);
  }

  onDialogClose() {
    this.displayDialog = false;
  }
}
