- Modules can also be used to lazy load features and thus reduce the number of requests to the server and reduce `http-requests` and allow offline availability.

- Examine `main.routes.ts` an how it lazy loads `StatisticsModule`:

  ```typescript
  {
    path: 'statistics',
    loadChildren: () =>
        import('../statistics/statistics.module').then(
          (m) => m.StatisticsModule
        ),
  },
  ```
