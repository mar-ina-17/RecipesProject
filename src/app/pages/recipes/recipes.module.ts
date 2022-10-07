import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';

import { SharedModule } from 'src/app/shared/shared.module';
import { TruncatePipe } from '../../pipes/string-truncate.pipe';
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
    FormsModule,
    CardModule,
    ChipModule,
  ],
})
export class RecipesModule {}
