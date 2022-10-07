import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-inputs',
  templateUrl: './recipe-inputs.component.html',
  styleUrls: ['./recipe-inputs.component.scss'],
})
export class RecipeInputsComponent implements OnInit {
  @Input() recipe: Recipe;
  name: string;
  description: string;
  isDisabled: boolean;
  constructor() {}

  ngOnInit(): void {
    this.name = this.recipe.name ? this.recipe.name : '';
    this.description = this.recipe.description ? this.recipe.description : '';
    this.isDisabled = this.recipe.isDisabled ? this.recipe.isDisabled : true;

    console.log(this.recipe);
  }
}
