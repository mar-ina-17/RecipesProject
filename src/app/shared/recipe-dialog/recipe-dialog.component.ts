import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/store/models/recipe.model';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss'],
})
export class RecipeDialogComponent implements OnInit {
  @Input() display: boolean;
  @Output() dialogOutput = new EventEmitter<boolean>();
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
  closeDialogEmit() {
    this.dialogOutput.emit(false);
  }
}
