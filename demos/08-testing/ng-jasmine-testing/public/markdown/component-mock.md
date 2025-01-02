- Examine `auth.service.ts` and compare it to `auth.service.mock.ts`. They are used in `use-mock.component.ts` and `use-mock.component.spec.ts`.

```typescript
export class UseMockComponent {
  auth = inject(AuthService);
  loggedIn = this.auth.isAuthenticated();
}
```
- The `TestBed` used in `use-mock.component.spec.ts` allows us to create the component and its supporting module. A `ComponentFixture` is a `TestHarness` for interacting with a component and its corresponding elements. In the providers section the mock object is used

  ```javascript
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: mock }],
    }).createComponent(UseMockComponent);

    fixture.detectChanges();
  });
  ```
