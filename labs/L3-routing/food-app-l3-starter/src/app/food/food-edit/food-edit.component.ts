import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent {
  @Input() food: FoodItem = new FoodItem();
  @Output() onFoodSave: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("receiving data on input:", changes["food"]);
  }

  saveFood() {
    if (this.food) this.onFoodSave.emit(this.food);
  }
}
