import { Component } from '@angular/core';
import { BarChartModule } from '@swimlane/ngx-charts';
import { RowDirective, CenteredDirective } from '../../../shared/formatting/formatting-directives';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        RowDirective,
        CenteredDirective,
        BarChartModule,
    ],
})
export class ChartComponent {
  saleData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 },
  ];
}
