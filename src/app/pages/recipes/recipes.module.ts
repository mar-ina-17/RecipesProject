import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

import { SharedModule } from 'src/app/shared/shared.module';
import { TruncatePipe } from '../../shared/pipes/string-truncate.pipe';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeDialogComponent } from './components/recipe-dialog/recipe-dialog.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesFacade } from './store/recipe.facade';
import { RecipesEffects } from './store/recipes.effect';
import { recipesReducer } from './store/recipes.reducer';
import { RECIPE_FEATURE_NAME } from './store/recipes.state';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeDialogComponent,
    RecipeItemComponent,
    RecipeListComponent,
    TruncatePipe,
  ],

  imports: [
    CardModule,
    CommonModule,
    DropdownModule,
    EffectsModule.forFeature([RecipesEffects]),
    MessageModule,
    MessagesModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature(RECIPE_FEATURE_NAME, recipesReducer),
  ],
  providers: [RecipesFacade],
})
export class RecipesModule {}
