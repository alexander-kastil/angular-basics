- Dependency Injection is used to provide instances of classes, mostly services to components. In Angular providers are registered in `app.config.ts`:

- Examine explicit registration of `DemoService` in `demos.module.ts`

    ```typescript
    export const appConfig: ApplicationConfig = {
      providers: [
          provideHttpClient(),
          provideRouter(routes),
          provideAnimations(),
          importProvidersFrom([
              MarkdownModule.forRoot(),
              MatSnackBarModule,
              MatDialogModule,
              provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
              provideAuth(() => getAuth()),
          ]),
          provideStore(),
          provideState(appState),
          provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), connectInZone: true })
      ],
    };
    ```

- Examine use of `providedIn` in `person.service.ts` which loosely couples the service to the module  

    ```typescript
    @Injectable({providedIn: 'root',})
    export class PersonService {
    ```

- Examine constructor based injection in combination with imperative programming (subscribe) in `dependency-injection.component.ts`:

  ```typescript
  export class DependencyInjectionComponent implements OnInit {
    ps = inject(PersonService);
    persons: Person[] = [];

    ngOnInit(): void {
      this.ps.getPersons().subscribe((persons: Person[]) => {
        this.persons = persons;
      });
    }
  }
  ```