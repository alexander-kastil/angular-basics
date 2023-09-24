 - This component is using `RowDirective` and `CenteredDirective` to center the chart

  ```html
  <mat-card-content class="chart" row centered>
  ```

  ```typescript
  @Directive({
    selector: '[centered]',
    host: {
      'style': `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `},
    standalone: true
  })
  export class CenteredDirective {}
  ```
