import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar.service';
import { provideHttpClient } from '@angular/common/http';

describe('NavbarService', () => {
  let service: NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(NavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
