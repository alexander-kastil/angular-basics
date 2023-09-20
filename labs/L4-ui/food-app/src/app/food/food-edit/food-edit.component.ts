import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent implements OnInit {
  constructor() {}

  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnInit() {}

  doSave() {
    console.log("food to save", this.food);
    this.saveFood.emit(this.food);
  }
}
