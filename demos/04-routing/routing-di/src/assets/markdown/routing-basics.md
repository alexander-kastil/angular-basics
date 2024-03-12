- With Angular 16 you can bind route parameters to component inputs. To enable this feature, set the `withComponentInputBinding` in `app.config.ts`:

  ```typescript
  export const appConfig: ApplicationConfig = {
      providers: [
          provideHttpClient(),
          provideRouter(routes, withComponentInputBinding()),
  ```

- This binding is used in `skills-edit.component.ts` to read the id of the route:

  ```typescript
  export class SkillsEditComponent {
    @Input({ required: true }) id = 0;
  ```