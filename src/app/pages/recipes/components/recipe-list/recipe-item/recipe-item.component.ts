import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/store/models/recipe.model';
import { RecipeService } from 'src/app/store/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}
}
