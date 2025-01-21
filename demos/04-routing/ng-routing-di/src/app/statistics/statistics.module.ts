import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { RevenueComponent } from './revenue/revenue.component';
import { CostComponent } from './cost/cost.component';

@NgModule({
    imports: [CommonModule, StatisticsRoutingModule, RevenueComponent, CostComponent],
})
export class StatisticsModule {}
