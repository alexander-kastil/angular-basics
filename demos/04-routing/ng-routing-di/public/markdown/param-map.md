This component demonstrates the pitfalls of using Router snapshots when the component that is the routing target only executes its ngOnInit method once. Examine `pm-child.component.ts`:

```typescript
ngOnInit() {
    this.useSnapShot();
    // this.useParamMap();
}
```
