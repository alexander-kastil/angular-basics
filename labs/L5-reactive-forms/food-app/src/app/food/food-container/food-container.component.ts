import { Component, inject, signal } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';
import { FoodEditComponent } from '../food-edit/food-edit.component';

@Component({
  selector: 'app-food-container',
  standalone: true,
  imports: [FoodListComponent, FoodEditComponent],
  templateUrl: './food-container.component.html',
  styleUrl: './food-container.component.scss'
})
export class FoodContainerComponent {
  fs = inject(FoodService);
  food = signal<FoodItem[]>([]);
  selected: FoodItem | null = null;

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food.set(data);
    });
  }

  selectFood(food: FoodItem) {
    console.log('selecting', food);
    this.selected = { ...food };
  }

  deleteFood(food: FoodItem) {
    console.log('deleting', food);
  }

  foodSaved(item: FoodItem) {
    this.food.update(foods => {
      const idx = foods.findIndex(f => f.id === item.id);
      if (idx > -1) {
        foods[idx] = item;
        return [...foods];
      }
      return [...foods, item];
    });
    this.selected = null;
  }

  addFood() {
    this.selected = new FoodItem();
  }
}
