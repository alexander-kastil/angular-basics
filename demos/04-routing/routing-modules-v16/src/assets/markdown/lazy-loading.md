Examine `demos`-route in `app.routing.module.ts` and `demos.module.ts`. DemosModule represents a lazy loaded module.

```typescript
{
  path: 'demos',
  loadChildren: () => import('./demos/demos.module').then((m) => m.DemosModule),
},
```
