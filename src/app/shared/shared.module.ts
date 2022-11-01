import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TokenGenerator } from 'ts-token-generator';
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
    ReactiveFormsModule,
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
    ReactiveFormsModule,
  ],
  providers: [TokenGenerator],
})
export class SharedModule {}
