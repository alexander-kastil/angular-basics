import { Component, output, input } from '@angular/core';
import { FoodItem } from '../../food.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-row',
  templateUrl: './food-row.component.html',
  styleUrls: ['./food-row.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
})
export class FoodRowComponent {
  readonly food = input.required<FoodItem>();
  readonly delete = output<FoodItem>();
  readonly edit = output<FoodItem>();

  deleteFood() {
    if (this.food != null) this.delete.emit(this.food());
  }

  editFood() {
    if (this.food != null) this.edit.emit(this.food());
  }
}
