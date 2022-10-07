import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../../models/shared.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  display: boolean = false;
  new_recipe;
  recipes: Recipe[] = [
    new Recipe(
      1,
      'Recipe 1',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      ['Tomatoes', 'Potatoes', 'Bread'],
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. '
    ),
    new Recipe(
      2,
      'Recipe 2',
      'https://live.staticflickr.com/65535/48692488766_3787f947e7_b.jpg',
      ['Fish', 'Potatoes', 'Milk'],
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. '
    ),
    new Recipe(
      3,
      'Recipe 3',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      ['Chocolate', 'Cheese', 'Vanilla'],
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. '
    ),
  ];

  constructor() {}
  ngOnInit(): void {
    this.recipes.forEach((element) => {
      element.isDisabled = true;
    });
  }

  selectRecipe = (recipe: Recipe) => {
    this.selectedRecipe.emit(recipe);
  };

  onClose = (e: Event) => {
    this.display = false;
  };

  newRecipe = () => {
    this.display = true;
    this.new_recipe = new Recipe();
  };
}
