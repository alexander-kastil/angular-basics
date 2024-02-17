import { Component, EventEmitter, Output, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormField, MatButtonModule, MatInputModule],
  templateUrl: './food-edit.component.html',
  styleUrl: './food-edit.component.scss'
})
export class FoodEditComponent {
  food = input.required<FoodItem>();
  @Output() onFoodSave: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  constructor() {
    effect(() => {
      console.log('Receiving data on input:', this.food());
    });
  }

  saveFood() {
    if (this.food) this.onFoodSave.emit(this.food());
  }
}