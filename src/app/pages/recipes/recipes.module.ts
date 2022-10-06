import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
  ],

  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}
