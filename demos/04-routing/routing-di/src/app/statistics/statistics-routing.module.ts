import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueComponent } from './revenue/revenue.component';
import { CostComponent } from './cost/cost.component';

const STATISTICS_ROUTES: Routes = [
  {
    path: ':year',
    children: [
      {
        path: 'revenue',
        component: RevenueComponent,
      },
      {
        path: 'cost',
        component: CostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(STATISTICS_ROUTES)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule { }
