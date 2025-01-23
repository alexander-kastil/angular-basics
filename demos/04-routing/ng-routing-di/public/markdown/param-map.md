`paramMap` in Angular's ActivatedRoute provides an observable stream of route parameters, allowing you to react to changes in parameters. Unlike snapshot, which only provides an initial snapshot of parameters, paramMap ensures your component updates correctly when route parameters change without navigating away from the current component.

This component demonstrates the pitfalls of using Router snapshots when the component that is the routing target only executes its ngOnInit method once. Examine `pm-child.component.ts`:

```typescript
ngOnInit() {
    this.useSnapShot();
    // this.useParamMap();
}
```
