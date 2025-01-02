import { TestBed } from '@angular/core/testing';
import { FoodStateService } from './food-state.service';
import { provideHttpClient } from '@angular/common/http';

describe('FoodStateService', () => {
  let service: FoodStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(FoodStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
