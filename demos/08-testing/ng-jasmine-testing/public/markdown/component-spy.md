- Examine `use-spy.component.spec.ts` which uses a spy instead of a mock. 

- In the configuration of the `TestingModule` we use the spy instead of the original `AuthService`.

  ```javascript
  beforeEach(() => {
    spy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    spy.isAuthenticated.and.returnValue(true);

    fixture = TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: spy }],
    }).createComponent(UseSpyComponent);

    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
  ```
