import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesFacade } from './store/recipe.facade';
import { RecipesEffects } from './store/recipes.effect';
import { recipesReducer } from './store/recipes.reducer';
import { RECIPE_FEATURE_NAME } from './store/recipes.state';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TruncatePipe } from '../../shared/pipes/string-truncate.pipe';
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
    TruncatePipe,
  ],

  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    DropdownModule,
    StoreModule.forFeature(RECIPE_FEATURE_NAME, recipesReducer),
    EffectsModule.forFeature([RecipesEffects]),

    FormsModule,
    CardModule,
    ChipModule,
    MessageModule,
    HttpClientModule,
    MessagesModule,
  ],
  providers: [RecipesFacade],
})
export class RecipesModule {}
