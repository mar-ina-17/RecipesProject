import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/store/models/recipe.model';
import { RecipeService } from 'src/app/store/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  display: boolean = false;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(recipe);
  }
  onClose = (e: Event) => {
    this.display = false;
  };
}
