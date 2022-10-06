import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../models/shared.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      'Healthy recipe.'
    ),
    new Recipe(
      'Recipe 2',
      'https://live.staticflickr.com/65535/48692488766_3787f947e7_b.jpg',
      'Healthy recipe.'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}

  selectRecipe = (recipe: Recipe) => {
    this.selectedRecipe.emit(recipe);
  };
}
