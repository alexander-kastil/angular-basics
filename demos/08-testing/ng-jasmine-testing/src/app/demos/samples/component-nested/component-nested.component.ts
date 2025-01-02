import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FoodItem } from '../food.model';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodRowComponent } from './food-row/food-row.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-component-nested',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FoodRowComponent,
    FoodListComponent,
  ],
  templateUrl: './component-nested.component.html',
  styleUrl: './component-nested.component.scss'
})
export class ComponentNestedComponent {
  food: FoodItem = { id: 99, name: 'Cordon Blue', rating: 4 };
}
