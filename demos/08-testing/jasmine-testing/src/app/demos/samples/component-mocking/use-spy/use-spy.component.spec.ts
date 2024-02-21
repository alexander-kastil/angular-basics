import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { UseSpyComponent } from './use-spy.component';
import { By } from '@angular/platform-browser';

describe('UseMockComponent with MockAuth Service', () => {
  let spy: any;
  let comp: UseSpyComponent;
  let fixture: ComponentFixture<UseSpyComponent>;

  beforeEach(() => {
    spy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    spy.isAuthenticated.and.returnValue(true);

    fixture = TestBed.configureTestingModule({
      imports: [UseSpyComponent],
      providers: [{ provide: AuthService, useValue: spy }],
    }).createComponent(UseSpyComponent);

    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should return Authenticated true', () => {
    expect(comp.loggedIn).toBe(true);
  });

  it('should have the correct login state on the Template', () => {
    const span = fixture.debugElement.query(By.css('[data-testid="result"]'));
    expect(span.nativeElement.innerText).toContain(
      'true'
    );
  });
});
