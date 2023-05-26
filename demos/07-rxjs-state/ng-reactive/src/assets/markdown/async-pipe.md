- 

- Async pipe unsubscribes automatically and is used to bind Observables. It can be used for Arrays, Objects and also specific properties:

  ```html
  <mat-card-content>
      <div *ngFor="let t of tasks$ | async">{{ t.id }} - {{ t.title }}</div>
  </mat-card-content>
  ```

