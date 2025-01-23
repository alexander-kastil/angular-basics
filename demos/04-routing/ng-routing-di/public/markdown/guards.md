Route guards in Angular are used to control navigation to specific routes, allowing you to implement authentication, authorization, and data loading checks before a route is activated. They act as gatekeepers, preventing access to routes based on defined conditions, ensuring security and data integrity.

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
