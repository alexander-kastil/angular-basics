import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalsComponentComponent } from './singals-component.component';

describe('SingalsComponentComponent', () => {
  let component: SingalsComponentComponent;
  let fixture: ComponentFixture<SingalsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SingalsComponentComponent]
    });
    fixture = TestBed.createComponent(SingalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
