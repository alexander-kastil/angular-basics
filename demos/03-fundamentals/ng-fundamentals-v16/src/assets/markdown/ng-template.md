- This is a mock to show the loading indicator which is displayed while the data is loading and then is replaced by a material card

  ```html
  <ng-template #loading>
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  </ng-template>

  <mat-card appearance="outlined" *ngIf="persons.length>0; else loading">
  ```
