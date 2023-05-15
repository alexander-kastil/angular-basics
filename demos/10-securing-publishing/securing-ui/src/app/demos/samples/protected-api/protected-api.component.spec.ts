import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedApiComponent } from './protected-api.component';

describe('ProtectedApiComponent', () => {
  let component: ProtectedApiComponent;
  let fixture: ComponentFixture<ProtectedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
