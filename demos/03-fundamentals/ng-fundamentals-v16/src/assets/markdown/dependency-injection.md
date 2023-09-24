- Dependency Injection is used to provide instances of classes, mostly services to components

- Examine explicit registration of `DemoService` in `demos.module.ts`

    ```typescript
    providers: [DemoService],
    ```

- Examine use of `providedIn` in `person.service.ts` which loosely couples the service to the module  

    ```typescript
    @Injectable({providedIn: 'root',})
    export class PersonService {
    ```

- Examine constructor based injection in combination with imperative programming (subscribe) in `dependency-injection.component.ts`:

  ```typescript
  export class DependencyInjectionComponent implements OnInit {
    persons: Person[] = [];
    constructor(private ps: PersonService) { }

    ngOnInit(): void {
      this.ps.getPersons().subscribe((persons: Person[]) => {
        this.persons = persons;
      });
    }
  }
  ```

- Examine use of inject-token in combination with declarative reactive programming in `demo-container.component.ts`:

  ```typescript
  export class DemoContainerComponent implements OnInit {
    ...
    ds = inject(DemoService);
    ...
    demos = this.ds.getItems();
  ```
