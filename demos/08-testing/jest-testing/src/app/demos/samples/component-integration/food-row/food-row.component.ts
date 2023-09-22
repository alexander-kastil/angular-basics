import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodItem } from '../food.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-food-row',
    templateUrl: './food-row.component.html',
    styleUrls: ['./food-row.component.scss'],
    standalone: true,
    imports: [MatIconModule],
})
export class FoodRowComponent {
  @Input() food: FoodItem | null = null;
  @Output() delete: EventEmitter<FoodItem> = new EventEmitter();
  @Output() edit: EventEmitter<FoodItem> = new EventEmitter();

  deleteFood() {
    if (this.food != null) this.delete.emit(this.food);
  }

  editFood() {
    if (this.food != null) this.edit.emit(this.food);
  }
}
