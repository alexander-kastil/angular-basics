- Examine `app.config.ts` and how it registers providers for the application:

    ```typescript
    export const appConfig: ApplicationConfig = {
        providers: [
            provideHttpClient(),
            provideRouter(
                routes,
                withComponentInputBinding()
            ),
            provideAnimations(),
            provideMarkdown(),
            importProvidersFrom([
                MatSnackBarModule,
                MatDialogModule,
                MatDialogModule,
                MatSnackBarModule,
            ]),
        ],
    };
    ```

- Explain how `main.ts` uses to provided services and artifacts:

    ```typescript
    bootstrapApplication(AppComponent, appConfig)
        .catch(err => console.error(err));
    ```