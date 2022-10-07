import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  selectedOption: Object;
  recipeOptions: Object[] = [
    { name: 'Add to shopping list' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
