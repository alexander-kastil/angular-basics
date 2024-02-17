# Reactive Programming and State Management

In this lab we will implement a Side Menu and a global Loading Indicator using RxJS and Stateful Services. In order to achieve this we will use the [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview). The Sidenav will be controlled by the [BreakpointObserver](https://material.angular.io/cdk/layout/overview) from the Material CDK.

![menu](_images/menu.jpg)

## Steps Outlined

### Implement a responsive Side Menu:

- Implement a menu.service.ts as a Stateful Service using BehaviorSubjects with the two properties:

    - sideNavVisible: boolean
    - sideNavPosition: over | side

- Add a Material Sidenav to app.component.html    

  ```html
  <div class="grid">
    <div class="gd-navbar">
      <app-navbar></app-navbar></div>
    <div class="gd-loading">
      <!-- <app-loading *ngIf="isLoading | async"></app-loading> -->
    </div>
    <div class="gd-mainrow">
      <mat-sidenav-container>
        <mat-sidenav #sidenav class="sidenav"
            [opened]="sidenavVisible | async"
            [mode]="(sidenavMode | async) ?? 'side'">
          <app-sidemenu></app-sidemenu>
        </mat-sidenav>
        <mat-sidenav-content [ngStyle]="workbenchMargin | async">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  </div>
  ``` 
- Add a required css to app.component.scss

  ```css
  .grid {
    display: grid;
    height: 100vh;
    width: 100%;
    gap: 0.5rem;
    grid-template-rows: 70px 10px calc(100vh - 100px);
    grid-template-columns: auto;
    grid-template-areas:
      "navbar"
      "loading"
      "mainrow";
  }

  .gd-navbar {
    grid-area: navbar;
  }

  .gd-loading {
    grid-area: loading;
  }

  .gd-mainrow {
    grid-area: mainrow;
    background-color: lightgray;
  }

  .sidenav{
    height: 80vh;
  }
  ```

- Take the [demo.container](/demos/07-rxjs-state/ng-reactive/src/app/demos/demo-container/) and the [sidenav.service.ts](/demos/07-rxjs-state/ng-reactive/src/app/shared/sidenav/sidenav.service.ts) as a reference.