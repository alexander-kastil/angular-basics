- String Interpolation uses double curly braces to bind values from properties and methods defined in the corresponding typescript file.

- Expressions can be used to do dynamic evaluation, calculation, formatting like:

  ```typescript
  Calculation: 1 + 3 + {{ nbr }} = {{ 1 + 3 + nbr }}</p>
  ```
- Notice the use of the ternary operator in the following example:

  ```typescript
  Conditional: {{ nbr > 0 ? 'Positive' : 'Negative' }}
  ```

- Events are bound to the template using the round brackets syntax. They can mutate a value directly from the template or using a method in the corresponding typescript file.   

  ```html
  <div [hidden]="!showDiv()">The original Div</div>
  <div [hidden]="showDiv()">The alternative Div</div>
  <button mat-raised-button (click)="showOriginalDiv = !showOriginalDiv" color="primary">
      Toggle the div
  </button>
  ```
