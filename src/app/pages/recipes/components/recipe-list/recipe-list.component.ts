import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/store/auth/auth.service';
import { Recipe } from '../../../../shared/models/shared.models';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedOutput = new EventEmitter<Recipe>();
  @Output() onNewOutput = new EventEmitter();

  @Input() recipes: Recipe[] = [];

  displayDialog: boolean = false;
  canAddRecipe: boolean = this._authServ.currentUserRole == 'admin';
  constructor(public _authServ: AuthenticationService) {}
  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.onSelectedOutput.emit(recipe);
  }

  onNew() {
    this.displayDialog = true;
    this.onNewOutput.emit();
  }

  onDialogClose() {
    this.displayDialog = false;
  }
}
