import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

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
    CardModule,
    CommonModule,
    ConfirmPopupModule,
    PasswordModule,
    InputTextModule,
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
    CardModule,
    PasswordModule,
    InputTextModule,
  ],
})
export class SharedModule {}
