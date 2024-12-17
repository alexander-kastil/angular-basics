- Examine `main.routes.ts` and notice `canActivate`:

```typescript
export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'demos',
                loadChildren: () => import('../demos/demo.routes').then((m) => m.DEMO_ROUTES),
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [adminGuard],
            },
        ]
    }
];
```

- Examine `adminGuard.ts`:

  ```typescript
  export const adminGuard = () => {
      const router = inject(Router);
      const sns = inject(SnackbarService);
      const allowAccess = !environment.adminAuthEnabled;
      return allowAccess ? 
        true : 
        router.navigate(['/']).then(() => sns.displayAlert('Error', '...'));
  };
  ```

- Go to 'environment.development.ts' - Try link below with `adminAuthEnabled: false | true`
