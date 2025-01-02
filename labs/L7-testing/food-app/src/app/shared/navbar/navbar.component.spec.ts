import { provideHttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { navItemsData } from './nav-item.data';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

describe('navbar.component', () => {
  let comp: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;
  let navbarServiceSpy: any;

  beforeEach(() => {
    navbarServiceSpy = jasmine.createSpyObj('NavbarService', ['getItems']);
    navbarServiceSpy.getItems.and.returnValue(of(navItemsData));

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: NavbarService, useValue: navbarServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should render 3 nav items', () => {
    const divs = el.queryAll(By.css('.menuItem'));
    expect(divs.length).toBe(3);
  });

  it('should toggle the side menu when clicked', () => {
    let visible = comp.navVisible();
    comp.toggleMenu();
    fixture.detectChanges();
    expect(comp.navVisible()).toEqual(!visible);
  });
});
