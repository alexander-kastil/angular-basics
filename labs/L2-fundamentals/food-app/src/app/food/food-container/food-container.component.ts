import { Component, inject } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';
import { FoodEditComponent } from '../food-edit/food-edit.component';

@Component({
  selector: 'app-food-container',
  imports: [FoodListComponent, FoodEditComponent],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.scss'
})
export class FoodContainerComponent {
  fs = inject(FoodService);
  food: FoodItem[] = [];
  selected: FoodItem | null = null;

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(food: FoodItem) {
    console.log('selecting', food);
    this.selected = { ...food };
  }

  deleteFood(food: FoodItem) {
    console.log('deleting', food);
  }

  foodSaved(item: FoodItem) {
    this.food = item.id
      ? this.food.map(food => food.id === item.id ? item : food)
      : [...this.food, item];
    this.selected = null;
  }
}
