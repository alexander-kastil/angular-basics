Examine `main.routes.ts` an how it lazy loads `StatisticsModule`:

```typescript
{
  path: 'statistics',
  loadChildren: () =>
      import('../statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
},
```
