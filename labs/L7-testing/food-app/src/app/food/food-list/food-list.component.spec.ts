import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FoodItem } from '../food.model';
import { FoodListComponent } from './food-list.component';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  const mockFoodItems: FoodItem[] = [
    { id: 1, name: 'Pizza', price: 10, items: 5 },
    { id: 2, name: 'Burger', price: 8, items: 3 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FoodListComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('food', mockFoodItems);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display food items in table', () => {
    const rows = fixture.debugElement.queryAll(By.css('.mat-mdc-row'));
    expect(rows.length).toBe(2);
  });

  it('should filter food items', () => {
    component.applyFilter('Pizza');
    expect(component.dataSource.filteredData.length).toBe(1);
  });

  it('should emit selected food item', () => {
    const spy = spyOn(component.foodSelected, 'emit');
    component.selectFood(mockFoodItems[0]);
    expect(spy).toHaveBeenCalledWith(mockFoodItems[0]);
  });

  it('should emit food item for deletion', () => {
    const spy = spyOn(component.foodDeleted, 'emit');
    component.deleteFood(mockFoodItems[0]);
    expect(spy).toHaveBeenCalledWith(mockFoodItems[0]);
  });

  it('should emit new food item when adding', () => {
    const spy = spyOn(component.foodAdding, 'emit');
    component.addFood();
    expect(spy).toHaveBeenCalled();
    const emittedItem = spy.calls.first().args[0];
    expect(emittedItem instanceof FoodItem).toBeTruthy();
  });
});