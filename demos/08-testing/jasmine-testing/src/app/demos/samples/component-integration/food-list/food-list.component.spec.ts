import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodServiceBS } from '../food.service-bs';
import { FoodListComponent } from './food-list.component';

describe('Component - Integration Test', () => {
  let fs: any;
  const foodData = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Blue', rating: 2 },
  ];
  const serviceResult = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
  ];

  const deleteItem = { id: 4, name: 'Cordon Blue', rating: 2 };

  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;
  let de: DebugElement;

  beforeEach(() => {
    fs = jasmine.createSpyObj(['getFood', 'deleteFood']);

    const module = {
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      imports: [
        MatCardModule,
        MatIconModule
      ],
      providers: [{ provide: FoodServiceBS, useValue: fs }],
    };

    TestBed.configureTestingModule(module);
    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should render each FoodItem as FoodItemRow', () => {
    fs.getFood.and.returnValue(of(foodData));
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should have three rows when an item is deleted', fakeAsync(() => {
    fs.getFood.and.returnValue(of(foodData));
    fixture.autoDetectChanges();

    spyOn(comp, 'deleteFood');
    const deRow = de.query(By.directive(FoodRowComponent));
    const row = deRow.componentInstance;
    row.delete.emit(deleteItem);

    fs.deleteFood.and.returnValue(of(serviceResult));
    expect(comp.deleteFood).toHaveBeenCalledWith(deleteItem);
  }));
});
