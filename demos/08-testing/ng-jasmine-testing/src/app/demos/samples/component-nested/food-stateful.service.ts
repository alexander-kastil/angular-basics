import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { FoodItem } from '../food.model';
@Injectable({
  providedIn: 'root',
})
export class FoodServiceStateful {
  http = inject(HttpClient);

  constructor() {
    this.http
      .get<FoodItem[]>(`${environment.api}food`)
      .subscribe((data) => {
        this.food.next(data);
      });
  }

  private food: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>([]);

  getFood() {
    return this.food.asObservable();
  }

  deleteFood(item: FoodItem) {
    let filtered = this.food.value.filter((f: FoodItem) => f.id !== item.id);
    this.food.next(filtered);
    // return of(true);
  }

  addFood(item: FoodItem) {
    let arr = this.food.value;
    arr.push(item);
    this.food.next(arr);
    // return of(true);
  }
}
