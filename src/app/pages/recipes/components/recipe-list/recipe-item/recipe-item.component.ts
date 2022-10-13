import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../../store/models/shared.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}
  ngOnInit(): void {}
}
