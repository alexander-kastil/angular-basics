import { TestBed } from '@angular/core/testing';

import { StatefulSignalsService } from './stateful-signals.service';

describe('StatefulSignalsService', () => {
  let service: StatefulSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatefulSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
