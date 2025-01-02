import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FoodItem } from '../../food.model';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodServiceStateful } from '../food-stateful.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FoodRowComponent,
    AsyncPipe
  ],
})
export class FoodListComponent {
  fs = inject(FoodServiceStateful)
  food = this.fs.getFood();

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food);
  }
}
