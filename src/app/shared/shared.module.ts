import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { IngredientInputsComponent } from './ingredient-inputs/ingredient-inputs.component';
@NgModule({
  declarations: [HeaderComponent, IngredientInputsComponent],
  imports: [
    ButtonModule,
    MenubarModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    ChipModule,
    CommonModule,
    ConfirmPopupModule,
  ],
  exports: [
    HeaderComponent,
    ButtonModule,
    MenubarModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    IngredientInputsComponent,
    ToastModule,
    ChipModule,
    CommonModule,
    ConfirmPopupModule,
  ],
})
export class SharedModule {}
