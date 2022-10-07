import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import { RecipeInputsComponent } from './recipe-inputs/recipe-inputs.component';
@NgModule({
  declarations: [HeaderComponent, RecipeDialogComponent, RecipeInputsComponent],
  imports: [ButtonModule, MenubarModule, DialogModule],
  exports: [
    HeaderComponent,
    ButtonModule,
    MenubarModule,
    DialogModule,
    RecipeDialogComponent,
    RecipeInputsComponent,
  ],
})
export class SharedModule {}
