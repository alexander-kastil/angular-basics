import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FoodItem } from '../../food.model';
import { FoodService } from './food.service';

@Component({
  selector: 'app-simple-food',
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class SimpleFoodComponent implements OnInit {
  fs = inject(FoodService);
  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food.id).subscribe((data) => {
      this.food = this.food.filter((i) => i != food);
    });
  }
}
