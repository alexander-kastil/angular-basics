This component demonstrates the pitfalls of using Router snapshots when the component that is the routing target only executes its ngOnInit method once.

```typescript
ngOnInit() {
    this.useSnapShot();
    // this.useParamMap();
}
```
