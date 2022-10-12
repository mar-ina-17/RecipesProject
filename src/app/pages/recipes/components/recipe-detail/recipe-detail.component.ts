import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './../../../../store/models/recipe.model';
export interface Option {
  name: string;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  selectedOption: Option | undefined;
  displaySave: boolean = false;

  recipeOptions: Option[] = [
    { name: 'Add to shopping list' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];

  constructor() {}
  ngOnInit(): void {}

  triggerOptionsAction(e) {
    if (this.selectedOption.name === 'Edit') {
      this.displaySave = true;
      this.recipe.isDisabled = false;
    } else {
      this.displaySave = false;
      this.recipe.isDisabled = true;
    }
  }
}
