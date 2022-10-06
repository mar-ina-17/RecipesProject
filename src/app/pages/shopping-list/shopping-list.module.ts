import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [ShoppingListRoutingModule, SharedModule],
})
export class ShoppingListModule {}
