import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulesComponent } from './ng-modules.component';

describe('NgModulesComponent', () => {
  let component: NgModulesComponent;
  let fixture: ComponentFixture<NgModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
