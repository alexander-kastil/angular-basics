- Examine Routes in app.routing.module.ts & demo.module.ts

    ```json
    const routes: Routes = [
        {
            path: '',
            component: HomeComponent,
        },
        {
            path: 'demos',
            loadChildren: () =>
            import('./demos/demos.module').then((m) => m.DemosModule),
        },
    ]  
    ```
- Examine Router-outlets in app.component.html und demo.component.html

    ```html
    <div gdArea="main">
        <router-outlet></router-outlet>
    </div>
    ```