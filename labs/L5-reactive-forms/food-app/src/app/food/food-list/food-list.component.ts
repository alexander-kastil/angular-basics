import { Component, EventEmitter, Input, Output, SimpleChanges, input } from '@angular/core';
import { FoodItem } from '../food.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  food = input<FoodItem[]>([]);
  @Output() foodSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output()
  foodDeleted: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output()
  foodAdding: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  displayedColumns: string[] = [
    "id",
    "name",
    "price",
    "calories",
    "deleteItem",
    "editItem",
  ];
  dataSource = new MatTableDataSource([]);

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(changes["food"].currentValue);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectFood(p: FoodItem) {
    this.foodSelected.emit(p);
  }

  deleteFood(item: FoodItem) {
    this.foodDeleted.emit(item);
  }

  addFood() {
    this.foodAdding.emit(new FoodItem());
  }
}

