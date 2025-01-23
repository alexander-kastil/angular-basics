Lazy loading in Angular allows you to load components (and their associated modules) only when they are needed, typically triggered by a route activation. This significantly reduces the initial bundle size, resulting in faster application load times and improved overall performance.

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
