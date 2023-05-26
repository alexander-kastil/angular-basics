- Show the disappearing side menu when changing screen resolution to xs implemented in sidenav.service.ts. It is triggered using the hamburger menu in the side panel and in the navbar. 

```typescript
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('side');
```

- `demo.component.html` toggles the mat-sidenav when these observables change

  ```html
  <mat-sidenav-container>
    <mat-sidenav
      #sidenav
      [opened]="sidenavVisible | async"
      [mode]="(sidenavMode | async) ?? 'side'"
    >
  ```
