`app.routes.ts` defines the navigation paths in your Angular application, mapping URLs to specific components. It also enables lazy loading of feature modules, improving initial load time by loading modules only when their routes are activated.

- Examine Routes in `app.routes.ts`, `main.routes.ts` & `demo.routes.ts`

    ```typescript
    export const routes: Routes = [
        {
            path: '',
            component: HomeComponent,
        },
        {
            path: 'main',
            loadChildren: () => import('./main/main.routes').then(m => m.MainRoutingModule)
        },
        {
            path: 'login',
            component: HomeComponent,
        },
        {
            path: '**',
            component: PageNotFoundComponent,
        }
    ];
    ```
- Examine Router-outlets in app.component.html und demo.component.html

    ```html
    <div gdArea="main">
        <router-outlet></router-outlet>
    </div>
    ```