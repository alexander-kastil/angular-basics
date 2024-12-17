- Examine `demo.routes.ts` that registeres as funtional resolver for the `demos` route:

  ```
  {
    path: 'preload',
    component: PreloadComponent,
    resolve: { demos: demosResolver }
  },
  ```

- Examine `demo.resolver.ts` and its implementation. In this case it is not accessing route parameters, but in case you need this, you can access the `ActivatedRouteSnapshot` and `RouterStateSnapshot` as the first two parameters of the resolver function.

  ```typescript
  export const demosResolver: ResolveFn<DemoItem[]> = (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
      service: DemoService = inject(DemoService)
  ): Observable<DemoItem[]> => service.getDemos()
      .pipe(
          tap((demos: DemoItem[]) => console.log('preloading demos', demos)),
          filter<DemoItem[]>((demos: DemoItem[]) => !!demos),
          take(1)
      );
  ```

- Examine `preload.component.ts` and its implementation.

  ```typescript
  export class PreloadComponent {
    route = inject(ActivatedRoute);
    demos = this.route.data.pipe(map((data) => data['demos']));
  }
  ```  