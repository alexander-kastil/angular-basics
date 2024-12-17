- Examine statistics-routing.module.ts and notice that there is no component in the root route:

```javascript
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
```