import { Component, SimpleChanges, effect, inject, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ColumnDirective } from '../../shared/formatting/formatting-directives';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ColumnDirective
  ],
  templateUrl: './food-edit.component.html',
  styleUrl: './food-edit.component.scss'
})
export class FoodEditComponent {
  fb = inject(FormBuilder)
  readonly food = input<FoodItem | null>(null);
  readonly onFoodSaved = output<FoodItem>();

  foodForm: FormGroup = this.fb.group({
    id: [this.food()?.id],
    name: [this.food()?.name, [Validators.required, Validators.minLength(3)]],
    price: [this.food()?.price, [Validators.required, Validators.min(1)]],
    calories: this.food()?.calories,
  });

  handleChanges = effect(() => {
    if (this.food()) {
      const item = this.food() as FoodItem;
      this.foodForm.setValue(item);
    }
  });

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['food']) {
  //     this.foodForm.setValue(changes['food'].currentValue);
  //   }
  // }

  saveForm(): void {
    this.onFoodSaved.emit(this.foodForm.value);
  }
}
