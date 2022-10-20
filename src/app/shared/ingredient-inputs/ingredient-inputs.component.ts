import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Ingredient } from 'src/app/shared/models/shared.models';
import * as message from '../../shared/models/messages';

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
      this.messageService.add(message.IngredientError);
    } else {
      const newIngredient =
        this.name && this.amount
          ? new Ingredient(this.name, this.amount)
          : null;
      this.addIngredientOutput.emit(newIngredient);
      this.clearInputs();
    }
  }

  ngOnInit(): void {}
}
