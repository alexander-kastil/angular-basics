import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { FoodItem } from '../food.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodSignalsService {
  http = inject(HttpClient);
  #food = signal<FoodItem[]>([]);

  constructor() {
    this.http.get<FoodItem[]>(`${environment.api}food`).subscribe((data) => {
      this.#food.set(data);
    });
  }

  getFood() {
    return computed(() => this.#food())
  }

  getFoodById(id: number) {
    return computed(() => this.#food().find((f) => f.id === id));
  }

  addFood(food: FoodItem) {
    this.http.post(`${environment.api}food`, food).subscribe((data) => {
      this.#food.update((arr: FoodItem[]) => [...arr, data as FoodItem]);
    });
  }

  updateFood(food: FoodItem) {
    this.http.put(`${environment.api}food/${food.id}`, food).subscribe(() => {
      this.#food.update((arr: FoodItem[]) => arr.map((f) => (f.id === food.id ? food : f)));
    });
  }

  deleteFood(food: FoodItem) {
    this.http.delete(`${environment.api}food/${food.id}`).subscribe(() => {
      this.#food.update((arr: FoodItem[]) => arr.filter((f) => f.id !== food.id));
    });
  }
}
