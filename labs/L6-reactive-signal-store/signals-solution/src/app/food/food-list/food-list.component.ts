import { Component, SimpleChanges, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClickableDirective } from '../../shared/formatting/formatting-directives';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  imports: [MatTableModule, MatCardModule, MatIconModule, ClickableDirective],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  readonly food = input.required<FoodItem[]>();
  readonly onFoodSelected = output<FoodItem>();
  readonly onFoodDeleted = output<FoodItem>();

  displayedColumns: string[] = ['id', 'name', 'price', 'calories', 'delete', 'select'];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource<FoodItem>([]);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['food']) {
      this.dataSource = new MatTableDataSource(changes['food'].currentValue);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectFood(food: FoodItem) {
    this.onFoodSelected.emit(food);
  }

  deleteFood(food: FoodItem) {
    this.onFoodDeleted.emit(food);
  }
}
