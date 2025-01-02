import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { MockAuthService } from './auth.service.mock';
import { UseMockComponent } from './use-mock.component';

describe('UseMockComponent with MockAuth Service', () => {
  const mock = new MockAuthService();
  let fixture: ComponentFixture<UseMockComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: mock }],
    }).createComponent(UseMockComponent);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should return Authenticated true', () => {
    const comp = fixture.componentInstance;
    expect(comp.loggedIn).toBe(true);
  });

  it('should have the correct login state on the Template', () => {
    expect(fixture.nativeElement.querySelector('[data-testid=auth]').textContent).toContain(
      'true'
    );
  });
});
