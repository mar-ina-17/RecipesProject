import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
@NgModule({
  declarations: [HeaderComponent, RecipeDialogComponent],
  imports: [
    ButtonModule,
    MenubarModule,
    DialogModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    ButtonModule,
    MenubarModule,
    DialogModule,
    RecipeDialogComponent,
    DropdownModule,
    FormsModule,
  ],
})
export class SharedModule {}
