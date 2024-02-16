- Examine style-inheritance.component.html and its use of `.divclass` defined in `styles.scss`

- Notice the components and their nesting and how they override `divclass`

- `app-first-child` again has a nested component

  ```html
  <div class="divclass">
      <app-first-child></app-first-child>
      <app-second-child></app-second-child>
  </div>
  ```
- Use this structure and `ViewEncapsulation.None` to explain style inheritance 

  ```typescript
  @Component({
    selector: 'app-first-child',
    template: `
      ...
    `,
    styles: [...],
    encapsulation: ViewEncapsulation.None
  })
  ```