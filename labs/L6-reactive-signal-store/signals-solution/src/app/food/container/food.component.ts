import { Component, inject } from '@angular/core';
import { foodStore } from '../store/food.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food',
  imports: [MatToolbarModule, MatButtonModule, MatProgressBarModule, FoodListComponent, FoodEditComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  store = inject(foodStore)

  selectFood(item: FoodItem) {
    this.store.selectFood(item.id);
  }

  saveFood(item: FoodItem) {
    const isUpdate = item.id !== 0;
    if (isUpdate) {
      this.store.updateFood(item);
    } else {
      this.store.addFood({ ...item, id: this.store.nextId() });
    }
    this.store.clearSelected();
  }

  addFood() {
    this.store.addNew();
  }

  deleteFood(item: FoodItem) {
    this.store.removeFood(item.id);
    this.store.clearSelected();
  }
}
