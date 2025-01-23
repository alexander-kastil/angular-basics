# Using @ngrx/signals in Angular Apps

This lab guides you through the process of transitioning an Angular application to use `@ngrx/signals` for state management. You will create a `SignalStore`, implement CRUD operations with loading indicators, apply a container/presenter pattern, and enhance data handling with `rxMethod` and server persistence. This lab will give you the essential knowledge to use `@ngrx/signals` to manage the state of a complex application.

**Steps Outlined:**

1.  **Setup a basic Signal Store**
2.  **Provide CRUD and loading for food using `@ngrx/signals Signal Store`**
3.  **Implement a container presenter pattern using signals and `input signals`**
4.  **Enhance our app by using `rxMethod` and persist data to the server**

### Setup a basic Signal Store

This step focuses on setting up the foundation for using `@ngrx/signals` by creating a basic `SignalStore` and integrating it into an existing Angular application.

**Details:**

1.  **Install `@ngrx/signals`:** The first step involves installing the necessary `@ngrx/signals` package using npm.

    ```bash
    npm i -S @ngrx/signals
    ```

2.  **Add `food.model.ts`:**  A basic model `FoodItem` is added to the project. This model represents the structure of the data that the application will be working with.

    ```typescript
    export class FoodItem {
        id = 0;
        name = '';
        price = 0;
        calories = 0;
    }
    ```

3.  **Add `food.service.ts`:** A service `FoodService` is added to the project. This service will be responsible for all HTTP requests regarding the food items in our application.

    ```typescript
    @Injectable({
        providedIn: 'root',
    })
    export class FoodService {
        http = inject(HttpClient);

        getFood() {
            return this.http.get<FoodItem[]>(`${environment.api}/food`);
        }

        addFood(food: FoodItem) {
            return this.http.post<FoodItem>(`${environment.api}/food`, food);
        }

        updateFood(food: FoodItem) {
            return this.http.put<FoodItem>(`${environment.api}/food/${food.id}`, food);
        }

        deleteFood(id: number) {
            return this.http.delete<FoodItem>(`${environment.api}/food/${id}`);
        }
    }
    ```

4.  **Add `food.store.ts`:**  A `SignalStore` named `foodStore` is created using the `signalStore` function, including initial state.

    ```typescript
    type FoodState = {
        food: FoodItem[];
        selectedFood: FoodItem | null;
    }

    const initialState: FoodState = {
        food: [],
        selectedFood: null,
    }

    export const foodStore = signalStore(
        { providedIn: 'root' },
        withState(initialState),
    )
    ```

5.  **Inject the `foodStore`:** The `foodStore` signal is injected into the `FoodComponent`, using the `inject` function.

    ```typescript
    @Component({
        selector: 'app-food',
        standalone: true,
        imports: [MatToolbarModule],
        templateUrl: './food.component.html',
        styleUrl: './food.component.scss'
    })
    export class FoodComponent {
        readonly store = inject(foodStore)
    }
    ```

6.  **Add `MatToolbar`:** The `MatToolbar` is added in the template to display the item count, leveraging the `store` property.

    ```html
    <mat-toolbar>
        <mat-toolbar-row>
            Items in foodStore: {{ store.food().length }}
        </mat-toolbar-row>
    </mat-toolbar>
    ```

7.  **Run the app:** The application is launched with `ng s -o` to verify the initial setup.

### Provide CRUD and loading for food using `@ngrx/signals Signal Store`

This step builds upon the basic store by adding computed properties and methods for handling CRUD operations. It introduces computed signals, and methods for adding, removing, updating, and selecting food items within the store.

**Details:**

1.  **Add `withComputed`:** The `withComputed` function is used to expose the `count` of food items as a computed signal in `food.store.ts`. The computed signal is derived from the length of the food array within the store.

    ```typescript
    withComputed((store) => ({
        count: computed(() => store.food().length),
    }))
    ```

2.  **Implement CRUD methods:** The `withMethods` function is used to add methods for adding, removing, updating, and selecting food items within the store. These methods modify the store state using the `patchState` function.

    ```typescript
    withMethods((store) => ({
        addFood: (food: FoodItem) => {
            const items = [...store.food(), food];
            patchState(store, { food: items })
        },
        removeFood: (id: number) => {
            const items = store.food().filter((f: FoodItem) => f.id !== id);
            patchState(store, { food: items })
        },
        updateFood: (food: FoodItem) => {
            const allItems = [...store.food()];
            const idx = allItems.findIndex((f: FoodItem) => f.id === food.id);
            allItems[idx] = food;
            patchState(store, { food: allItems })
        },
        selectFood: (id: number) => {
            const item = store.food().find((f: FoodItem) => f.id === id);
            patchState(store, { selectedFood: item })
        },
        clearSelected() {
            patchState(store, { selectedFood: null })
        }
    })),
    ```

3.  **Implement `loadFood`:** The `withMethods` function is extended to include a `loadFood` method, which uses `FoodService` to load food items from the server and update the store's state.

    ```typescript
    withMethods((store, service = inject(FoodService)) => ({
        ...
        loadFood: () => {
            service.getFood().subscribe((food) => {
                patchState(store, { food })
            })
        },
    }))
    ```

4.  **Call `loadFood` on initialization:** The `withHooks` function is used to call the `loadFood` method when the store is initialized, ensuring that data is fetched when the component loads.

    ```typescript
    withHooks({
        onInit({ loadFood }) {
            loadFood();
        },
    })
    ```

5.  **Display food items:** A basic loop is added to the `food.component.html` template to display loaded food items.

    ```html
    <div>
        @for (item of store.food(); track $index) {
            <div>
                {{item.name}}
            </div>
        }
    </div>
    ```

### Implement a container presenter pattern using signals and `input signals`

This step focuses on implementing a container/presenter pattern, where the `FoodComponent` acts as a container and the `FoodListComponent` and `FoodEditComponent` act as presenters. `input signals` are used to pass data to the presenters and output events for data manipulation.

**Details:**

1.  **Create list and edit components:**  `FoodListComponent` and `FoodEditComponent` are generated with the Angular CLI.

    ```bash
    ng g c food/food-list
    ng g c food/food-edit
    ```

2.  **Implement `FoodListComponent`:**  The `FoodListComponent` is implemented to display a list of food items using a Material table. It receives food items through the `input` and emits an event when a food item is selected using the `output`.

    ```typescript
    @Component({
    selector: 'app-food-list',
    imports: [MatTableModule, MatCardModule, MatIconModule],
    templateUrl: './food-list.component.html',
    styleUrl: './food-list.component.scss'
    })
    export class FoodListComponent {
        readonly food = input.required<FoodItem[]>();
        readonly onFoodSelected = output<FoodItem>();
        readonly onFoodDeleted = output<FoodItem>();

        displayedColumns: string[] = ['id', 'name', 'price', 'calories', 'delete', 'select'];
        dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource<FoodItem>([]);

        ngOnChanges(changes: SimpleChanges) {
            if (changes['food']) {
            this.dataSource = new MatTableDataSource(changes['food'].currentValue);
            }
        }

        applyFilter(filterValue: string) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    }
    ```

    ```html
    <mat-card appearance="outlined">
        <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="id">
                <th mat-header-cell *matHeaderCellDef>Id</th>
                <td mat-cell *matCellDef="let element">{{ element.id }}</td>
            </ng-container>

            <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let element">{{ element.name }}</td>
            </ng-container>

            <ng-container matColumnDef="price">
                <th mat-header-cell *matHeaderCellDef>Price</th>
                <td mat-cell *matCellDef="let element">{{ element.price }}</td>
            </ng-container>

            <ng-container matColumnDef="calories">
                <th mat-header-cell *matHeaderCellDef>Calories</th>
                <td mat-cell *matCellDef="let element">{{ element.calories }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr class="clickable" mat-row
                *matRowDef="let row; columns: displayedColumns"
                (click)="selectFood(row)"
            ></tr>
        </table>
    </mat-card>
    ```

    ```css
    mat-card {
        margin-bottom: 1rem;
    }

    table {
        width: 100%;
    }

    .clickable {
        cursor: pointer;
    }
    ```

3.  **Implement `FoodEditComponent`:** The `FoodEditComponent` is implemented to display a form for editing food items. It receives a food item through the `input` and emits an event using `output` when the form is saved.

    ```typescript
    @Component({
    selector: 'app-food-edit',
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ColumnDirective
    ],
    templateUrl: './food-edit.component.html',
    styleUrl: './food-edit.component.scss'
    })
    export class FoodEditComponent {
        fb = inject(FormBuilder)
        readonly food = input<FoodItem | null>(null);
        readonly onFoodSaved = output<FoodItem>();

        foodForm: FormGroup = this.fb.group({
            id: [this.food()?.id],
            name: [this.food()?.name, [Validators.required, Validators.minLength(3)]],
            price: [this.food()?.price, [Validators.required, Validators.min(1)]],
            calories: this.food()?.calories,
        });

        handleChanges = effect(() => {
            if (this.food()) {
            const item = this.food() as FoodItem;
            this.foodForm.setValue(item);
            }
        });

        saveForm(): void {
            this.onFoodSaved.emit(this.foodForm.value);
        }
    }
    ```

    ```html
    <mat-card appearance="outlined">
        <mat-card-header>
            <mat-card-title>Edit</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form [formGroup]="foodForm" novalidate column>
                <mat-form-field>
                    <mat-label>Id</mat-label>
                    <input matInput type="number" formControlName="id" />
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Name</mat-label>
                    <input matInput type="text" placeholder="Name" formControlName="name" />
                </mat-form-field>
                @if ( foodForm.controls['name'].touched &&
                foodForm.controls['name'].errors != undefined ) {
                    <mat-error> Name is required & must be more than 3 chars </mat-error>
                }
                <mat-form-field>
                    <mat-label>Price</mat-label>
                    <input
                    matInput
                    type="number"
                    placeholder="Price"
                    formControlName="price"
                    />
                </mat-form-field>
                @if ( foodForm.controls['price'].touched &&
                foodForm.controls['price'].errors != undefined ) {
                    <mat-error> Price must be greater than 1€ </mat-error>
                }
                <mat-form-field>
                    <mat-label>Calories</mat-label>
                    <input
                    matInput
                    type="number"
                    placeholder="Calories"
                    formControlName="calories"
                    />
                </mat-form-field>
            </form>
        </mat-card-content>
        <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="saveForm()">Save</button>
        </mat-card-actions>
    </mat-card>
    ```

4.  **Hook container/presenter pattern:** The `FoodComponent` template is updated to use the `FoodListComponent` and `FoodEditComponent`, passing data and handling events.

    ```html
    <app-food-list  [food]="store.food()" (onFoodSelected)="selectFood($event)"></app-food-list>

    @if (store.selectedFood()!=null) {
        <app-food-edit [food]="store.selectedFood()" (onFoodSaved)="saveFood($event)" ></app-food-edit>
    }
    ```

    ```css
    .addRow{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    ```

5.  **Implement `addFood()`**: Implement the `addFood()` method by using the `nextId()` computed property which increments the new id for new food item.

    ```typescript
    nextId: computed(() => store.food().reduce((max, p) => p.id > max ? p.id : max, 0) + 1),
    ```


6.  **Implement logic in `FoodComponent`:** The `FoodComponent` is updated to handle the logic for selecting a food item and saving a food item, calling the appropriate methods in the `store`.

    ```typescript
    export class FoodComponent {
        store = inject(foodStore)

        selectFood(item: FoodItem) {
            this.store.selectFood(item.id);
        }

        saveFood(item: FoodItem) {
            const isUpdate = item.id !== 0;
            if (isUpdate) {
                this.store.updateFood(item);
            } else {
                this.store.addFood({ ...item, id: this.store.nextId() });
            }
            this.store.clearSelected();
        }
    }
    ```

### Enhance our app by using `rxMethod` and persist data to the server

This step enhances the application by using `rxMethod` to handle asynchronous operations with a loading indicator. It also persists data to the server by updating the methods in `food.store.ts`.

**Details:**

1.  **Add `loading` flag to store:** The `FoodState` in `food.store.ts` is extended with a `loading` flag, and initial state is updated accordingly.

    ```typescript
    type FoodState = {
        food: FoodItem[];
        selectedFood: FoodItem | null;
        loading: boolean;
    }
    ```

2.  **Add progress bar:** A Material progress bar is added to the template to indicate loading state.

    ```html
    <div class="progress">
        @if (store.loading()) {
            <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        }
    </div>
    ```

    ```css
    .progress{
        height: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    ```

3.  **Install `@ngrx/operators`:** The `@ngrx/operators` package is installed to provide the `tapResponse` operator.

    ```bash
    npm i -S @ngrx/operators
    ```

4.  **Refactor `loadFood` with `rxMethod`:** The `loadFood` method in `food.store.ts` is refactored to use `rxMethod` and the `tapResponse` operator to handle asynchronous operations and loading states.

    ```typescript
    loadFood: rxMethod<void>(
        pipe(
            switchMap(() => {
                patchState(store, { loading: true });
                return service.getFood().pipe(
                    tapResponse({
                        next: (food) => patchState(store, { food }),
                        error: console.error,
                        finalize: () => patchState(store, { loading: false }),
                    })
                );
            })
        )
    ),
    ```

5.  **Implement `logError`:** A basic `logError` function is created to handle errors consistently in our methods.

    ```typescript
     const logError = (error: Error) => console.error("error: ", error);
    ```

6.  **Update CRUD methods with `rxMethod`:** The `addFood`, `updateFood`, and `removeFood` methods in `food.store.ts` are updated to use `rxMethod` and the `tapResponse` operator to handle asynchronous operations and loading states.

    ```typescript
        addFood: rxMethod<FoodItem>(
        pipe(
            switchMap((food: FoodItem) => {
                patchState(store, { loading: true });
                return service.addFood(food).pipe(
                    tapResponse({
                        next: (food) => {
                            const items = [...store.food(), food];
                            patchState(store, { food: items })
                        },
                        error: logError,
                        finalize: () => patchState(store, { loading: false }),
                    })
                );
            })
        )
    ),
    ```

    ```typescript
    updateFood: rxMethod<FoodItem>(
        pipe(
            switchMap((food: FoodItem) => {
                patchState(store, { loading: true });
                return service.updateFood(food).pipe(
                    tapResponse({
                        next: (food) => {
                            const allItems = [...store.food()];
                            const idx = allItems.findIndex((f: FoodItem) => f.id === food.id);
                            allItems[idx] = food;
                            patchState(store, { food: allItems })
                        },
                        error: logError,
                        finalize: () => patchState(store, { loading: false }),
                    })
                );
            })
        )
    ),
    ```

    ```typescript
    removeFood: rxMethod<number>(
        pipe(
            switchMap((id: number) => {
                patchState(store, { loading: true });
                return service.deleteFood(id).pipe(
                    tapResponse({
                        next: (food) => {
                            const items = store.food().filter((f: FoodItem) => f.id !== id);
                            patchState(store, { food: items })
                        },
                        error: logError,
                        finalize: () => patchState(store, { loading: false }),
                    })
                );
            })
        )
    ),
    ```
7.  **Implement `ClickableDirective`** A standalone directive is created to handle the click function on elements.

    ```typescript
    @Directive({
        selector: '[clickable]',
        standalone: true,
        host: { 'style': 'cursor:pointer;' },
    })
    export class ClickableDirective {}
    ```

8. **Implement `deleteFood()`**: Implement the `deleteFood()` functionality by adding a delete button to the food list table and remove the selectFood() method on the row.

    ```html
    <ng-container matColumnDef="delete">
    <th mat-header-cell *matHeaderCellDef></th>
    <td mat-cell *matCellDef="let element" class="icon-cell">
        <a (click)="deleteFood(element)">
        <mat-icon class="mat-18" matTooltip="Delete">delete</mat-icon>
        </a>
    </td>
    </ng-container>
    ```