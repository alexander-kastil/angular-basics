import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { FoodItem } from "./food.model";


@Injectable({
  providedIn: "root",
})
export class FoodService {
  http = inject(HttpClient);

  getFood() {
    return this.http.get<FoodItem[]>(`${environment.apiUrl}food`);
  }

  addFood(food: FoodItem) {
    return this.http.post<FoodItem>(`${environment.apiUrl}food`, food);
  }

  updateFood(food: FoodItem) {
    return this.http.put<FoodItem>(`${environment.apiUrl}food/${food.id}`, food);
  }

  deleteFood(id: number) {
    return this.http.delete<number>(`${environment.apiUrl}food/${id}`);
  }
}