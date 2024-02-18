- The Angular `async pipe` is a useful tool for working with `observables` in `templates`. 

- It automatically subscribes to an `observable` and exposes its latest value to the template. It also handles the unsubscribing process when the component is destroyed. 

- This way, we can avoid memory leaks and keep our code clean and concise.

  ```html
  <mat-card-content>
      <div *ngFor="let t of tasks$ | async">{{ t.id }} - {{ t.title }}</div>
  </mat-card-content>
  ```

