Enable Tracing of Router Events in app-routing.module.ts:

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Investigate demo-container.component.ts. Notice that the method setMetadata() gets the current Component from Router Events

```typescript
setMetadata() {
this.router.events
    .pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.rootRoute(this.route)),
    filter((route: ActivatedRoute) => route.outlet === 'primary')
    )
    .subscribe((route: ActivatedRoute) => {
    this.header =
        route.component != null
        ? `Component: ${route.component
            .toString()
            .substring(6, route.component.toString().indexOf('{') - 1)}`
        : '';
    });
}
```
