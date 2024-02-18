import { Component, OnInit, inject } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodServiceBS } from '../food.service-bs';
import { FoodRowComponent } from '../food-row/food-row.component';

import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss'],
    standalone: true,
    imports: [
    MatCardModule,
    FoodRowComponent
],
})
export class FoodListComponent implements OnInit {
  fs = inject(FoodServiceBS)
  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteFood(food);
  }
}
