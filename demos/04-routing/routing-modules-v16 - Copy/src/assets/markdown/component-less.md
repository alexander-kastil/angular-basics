- Examine statistics-routing.module.ts and notice that there is no component in the root route:

```javascript
const routes: Routes = [
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