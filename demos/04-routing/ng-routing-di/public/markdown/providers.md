- Examine `app.config.ts` and how it registers providers for the application:

    ```typescript
    export const appConfig: ApplicationConfig = {
        providers: [
            provideHttpClient(),
            provideRouter(routes, withComponentInputBinding()),
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

- Explain how `main.ts` uses to provided services and artifacts:

    ```typescript
    bootstrapApplication(AppComponent, appConfig)
        .catch(err => console.error(err));
    ```