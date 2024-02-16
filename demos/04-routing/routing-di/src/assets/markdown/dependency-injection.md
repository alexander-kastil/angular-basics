- Examine the use of `inject` in `dependency-injection.component.ts`. It replaces the use of the constructor for dependency injection. Services and tokens have to provided in order to be available for injection.

  ```typescript
    @Component({
        selector: 'app-dependency-injection',
        standalone: true,
        templateUrl: './dependency-injection.component.html',
        styleUrl: './dependency-injection.component.scss',
        imports: [MarkdownRendererComponent, BorderDirective, CenteredDirective, AsyncPipe]
    })
    export class DependencyInjectionComponent {
        service = inject(DemoService);
        demos = this.service.getDemos();
    }
  ```

- Examine the registration of the `HttpClient` in `demo.module.ts`. It does not import the `HttpClientModule`. Instead it used on of the many `provide()` functions which is the basis of being able to use function based interceptors. If you do not used `Interceptors`, you can skip it.

  ```typescript
  providers: [
      provideHttpClient( withInterceptorsFromDi() ),
  ],
  ```