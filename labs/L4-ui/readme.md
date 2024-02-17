# Food App User Interface

In this lab we will use Angular Material to implement a user interface for the Food App. We will use the [Material Getting Started](https://material.angular.io/guide/getting-started) to install Angular Material and use the [Material Components](https://material.angular.io/components/categories) to implement the user interface. We will use [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) to implement the base layout of the app.

We will also complete the implementation of the Food App by adding data access to the app.

![material](_images/material.jpg)

## Steps Outlined

- Install Angular Material and create a base responsive layout
- Implement a Material Design 
- Implement a custom Material Theme - optional

### Install Angular Material and create a base responsive layout

Add Angular Material to your project:

- Install Angular Material using the [Material Getting Started](https://material.angular.io/guide/getting-started) and choose a theme of your choice.

- Test the installation of Angular Material by replacing the `div` in the `navbar.component.html` with a [Material Toolbar](https://material.angular.io/components/toolbar/overview). In order to get this working you will need to import the `MatToolbarModule` from `@angular/material/toolbar` in the `navbar.component.ts`.

Implement the Base Layout using CSS Grid:

- Change to base layout in app.component to use [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). Use the [main.component.html](/demos/05-ui/user-interface/src/app/main/main.component.html) layout and [main.component.scss](/demos/05-ui/user-interface/src/app/main/main.component.scss ) as a reference. You could also use an online tool like [CSS Grid Generator](https://grid.layoutit.com/) to generate the grid layout.
    
- Hide the sidebar on devices with a horizontal width less than `960px`. We will add a toggle button in another lab. You could use [demo-container.component.scss](/demos/05-ui/user-interface/src/app/demos/demo-container/demo-container.component.scss) as a reference as it contains a media query.

### Implement a Material Design for Food App

- Use [mat-card](https://material.angular.io/components/card/overview) elements in `food-list.component.html` and `food-edit.component.html` to surround the content. You will have to import the following modules in the respective components:    
    - MatToolbarModule
    - MatCardModule
    - MatTableModule
    - MatIconModule
    - MatButtonModule
    - MatInputModule
    

- Use [mat-table](https://material.angular.io/components/table/overview) for the `food-list.component.html`

    >Note: The material table receives its values from the following line:

    ```typescript
    @Input() food: FoodItem[] = [];
    ```
    When items in the table are updated, the ngOnChanges lifecycle hook is used to update the table:

    ```typescript
    ngOnChanges(changes: SimpleChanges) {
        this.dataSource = new MatTableDataSource(changes["food"].currentValue);
    }
    ```

- Implement `foodSelected`, `foodDeleted`, and `foodAdding` in `food-list.component.ts`. Adding is triggered by the `Add Food` button and handled by the parent component `food-container.component.ts`. I implemented it here to be able to place the button in the toolbar.

- Wrap the `food-edit.component.html` in a `mat-card` and use the [mat-form-field](https://material.angular.io/components/form-field/overview) and [mat-input](https://material.angular.io/components/form-field/overview) for the input fields.

    ```html
    <mat-form-field>
        <input matInput type="text" placeholder="Name" [(ngModel)]="food.name" />
    </mat-form-field>
    ```

- Use the [mat-button-directive](https://material.angular.io/components/button/examples) for the `Save`-button in `food-edit.component.html` and the `Add Food`-button in `food-list.component.html`. You might notice that the button have different widths. We will fix this in the next step when implementing a custom Material Theme.

- Add the `burger.png` file as a centered image to the `home.component.html` and use a custom [web font](https://fonts.google.com/) in the welcome text by registering it in `index.html`.

    ![home](_images/home.jpg)

### Implement a custom Material Theme - optional

- Implement a custom material theme with a [custom color palette](https://material.io/resources/color/#!/?view.left=0&view.right=0) and replace the theme that you have chosen at the beginning of this lab:

- Use the [Demo App Theme](/demos/05-ui/user-interface/src/styles.scss) as a reference.