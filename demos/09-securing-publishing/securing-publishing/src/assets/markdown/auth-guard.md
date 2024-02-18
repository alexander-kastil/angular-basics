- Angular guards are a powerful feature that allow you to implement logic to determine whether a user can access a certain route in your application. 

- For example, you can use guards to check if the user is authenticated, has the required permissions, or meets some other criteria before navigating to a route. 

- Guards can also prevent navigation if the user tries to access a forbidden or invalid route. 

- Examine the use of `firebase.auth.guard.ts` in `main.routes.ts`:

  ```typescript
  export const MAIN_ROUTES: Routes = [
      {
          path: '',
          component: MainComponent,
          children: [
            ...
            {
                path: 'skills',
                loadChildren: () =>
                    import('../skills/skills.routes').then(
                        (m) => m.SKILL_ROUTES
                    ),
                canActivate: [firebaseAuthGuard]
            },
          ]
      }
  ];
  ```