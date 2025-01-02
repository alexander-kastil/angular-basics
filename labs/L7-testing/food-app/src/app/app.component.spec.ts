import { provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SideMenuService } from './shared/sidemenu/sidemenu.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let sideMenuService: SideMenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NoopAnimationsModule,
      ],
      providers: [
        SideMenuService,
        provideHttpClient()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    sideMenuService = TestBed.inject(SideMenuService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title from environment`, () => {
    expect(component.title).toBe(environment.title);
  });

  it('should clear workbench margin when nav is hidden', () => {
    const spy = signal(false);
    spyOn(sideMenuService, 'getSideNavVisible').and.returnValue(spy);
    component.navVisible = spy;
    fixture.detectChanges();
    expect(component.workbenchMargin).toEqual({});
  });

});
