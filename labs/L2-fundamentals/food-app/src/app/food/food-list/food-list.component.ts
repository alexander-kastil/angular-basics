import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"],
})
export class FoodListComponent {
  @Input()
  food: FoodItem[] = [];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output()
  foodDeleted: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  selectFood(item: FoodItem) {
    this.foodSelected.emit(item);
  }

  deleteFood(item: FoodItem) {
    this.foodDeleted.emit(item);
  }
}
