import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulSignalsComponent } from './stateful-signals.component';

describe('StatefulSignalsComponent', () => {
  let component: StatefulSignalsComponent;
  let fixture: ComponentFixture<StatefulSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatefulSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatefulSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
