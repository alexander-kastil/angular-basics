import { Component, OnInit, inject } from '@angular/core';
import { FoodItem } from '../../component-integration/food.model';
import { FoodServiceBS } from '../../component-integration/food.service-bs';

import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-simple-food',
    templateUrl: './simple-food.component.html',
    styleUrls: ['./simple-food.component.scss'],
    standalone: true,
    imports: [MatCardModule],
})
export class SimpleFoodComponent implements OnInit {
  fs = inject(FoodServiceBS);
  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food).subscribe(() => {
      this.food = this.food.filter((f) => f != food);
    });
  }
}
