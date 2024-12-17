- CSS Grid is a powerful layout tool that allows you to create two dimensional layouts with ease. To make things easier it provides areas that can be assigned to elements. These areas can be used to position elements in the grid. 

- Examine the layout of this component. It is using nested CSS Grid:

- Examine `app.component.html`. It is using CSS Grid areas:

  ```html
  <div class="grid">
    <div class="gdNavbar"><app-navbar></app-navbar></div>
    <div class="gdMainrow"><router-outlet></router-outlet></div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-rows: 80px auto;
    grid-template-columns: auto;
    grid-template-areas: 
      "navbar"
      "mainrow";
    height: 100vh;
    margin: 0 var(--gap-medium);
  }
  ```

- Examine `demo-container.component.html` which is using areas in combination with media queries
