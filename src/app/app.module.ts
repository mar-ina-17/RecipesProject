import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ShoppingListFacade } from './pages/shopping-list/store/shopping-list.facade';

import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesEffects } from './pages/recipes/store/recipes.effect';
import * as fromRecipes from './pages/recipes/store/recipes.reducer';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ recipes: fromRecipes.recipesReducer }),
    EffectsModule.forRoot([RecipesEffects]),
  ],
  providers: [ShoppingListFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
