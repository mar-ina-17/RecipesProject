import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Ingredient } from 'src/app/store/models/shared.models';

@Component({
  selector: 'app-ingredient-inputs',
  templateUrl: './ingredient-inputs.component.html',
  styleUrls: ['./ingredient-inputs.component.scss'],
  providers: [MessageService],
})
export class IngredientInputsComponent implements OnInit {
  @Output() addIngredientOutput = new EventEmitter<Ingredient>();
  name: string = '';
  amount: number;

  constructor(private messageService: MessageService) {}

  clearInputs() {
    this.name = '';
    this.amount = null;
  }

  addIngredient(event: Event) {
    if (!this.name || !this.amount) {
      this.messageService.add({
        key: 'warn-key',
        severity: 'error',
        summary: 'Error',
        detail: 'Please, fill in the name and amount of the ingredient! ',
      });
    } else {
      const newIngredient =
        this.name && this.amount
          ? new Ingredient(this.name, this.amount)
          : null;
      this.clearInputs();
      this.addIngredientOutput.emit(newIngredient);
    }
  }

  ngOnInit(): void {}
}
