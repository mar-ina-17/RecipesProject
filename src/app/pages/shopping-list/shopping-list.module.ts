import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [ShoppingListRoutingModule],
})
export class ShoppingListModule {}
