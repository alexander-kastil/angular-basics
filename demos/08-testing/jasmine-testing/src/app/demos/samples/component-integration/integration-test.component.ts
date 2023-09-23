import { Component } from '@angular/core';
import { FoodItem } from './food.model';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodRowComponent } from './food-row/food-row.component';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-integration-test',
    templateUrl: './integration-test.component.html',
    styleUrls: ['./integration-test.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        FoodRowComponent,
        FoodListComponent,
    ],
})
export class IntegrationTestComponent {
  f: FoodItem = { id: 99, name: 'Cordon Blue', rating: 4 };
}
