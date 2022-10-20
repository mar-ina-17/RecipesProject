import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShoppingListFacade } from './store/shopping-list.facade';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEffect } from './store/shopping-list.effect';
import { shoppingListReducer } from './store/shopping-list.reducers';
import { SHOPPING_LIST_FEATURE_NAME } from './store/shopping-list.state';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    FormsModule,
    MenubarModule,
    SharedModule,
    ShoppingListRoutingModule,
    EffectsModule.forFeature([ShoppingListEffect]),
    StoreModule.forFeature(SHOPPING_LIST_FEATURE_NAME, shoppingListReducer),
  ],
  providers: [ShoppingListFacade],
})
export class ShoppingListModule {}
