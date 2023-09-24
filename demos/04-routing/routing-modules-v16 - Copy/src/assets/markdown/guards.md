- Examine `app-routing.module.ts` and notice `canActivate`:

```
{
  path: 'admin',
  component: AdminComponent,
  children: [
      {
      path: 'admina',
      component: AdminAComponent,
      },
      {
      path: 'adminb',
      component: AdminBComponent,
      },
  ],
  canActivate: [IsAuthRouteGuard],
}
```

- Examine `IsAuthRouteGuard.ts` and the implementation of `canActivate`

- Go to 'environment.ts' - Try link below with `authEnabled: false | true`

```typescript
export const environment = {
  production: false,
  title: 'Routing',
  api: '/assets/skills.json',
  markdownPath: '/assets/markdown/',
  authEnabled: true,
};
```
