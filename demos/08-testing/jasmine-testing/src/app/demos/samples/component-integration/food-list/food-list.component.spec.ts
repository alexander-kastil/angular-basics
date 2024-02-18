import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodServiceBS } from '../food.service-bs';
import { FoodListComponent } from './food-list.component';

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

describe('Component - Integration Test', () => {
  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;
  let de: DebugElement;
  let fs: any;

  beforeEach(() => {
    fs = jasmine.createSpyObj('HttpClient', ['getFood', 'deleteFood']);
    fs.getFood.and.returnValue(of(foodData));
    fs.deleteFood.and.returnValue(of(serviceResult));

    TestBed.configureTestingModule({
      imports: [
        FoodListComponent,
        NoopAnimationsModule,
        MarkdownModule.forRoot()
      ],
      providers: [{ provide: FoodServiceBS, useValue: fs }],
    }).compileComponents();
    fixture = TestBed.createComponent(FoodListComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render each FoodItem as FoodItemRow', () => {
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should have three rows when an item is deleted', fakeAsync(() => {
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    const deRow = fixture.debugElement.query(By.directive(FoodRowComponent));
    const row = deRow.componentInstance;
    row.delete.emit(deleteItem);
    flush();
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(3);
    // expect(fixture.componentInstance.deleteFood).toHaveBeenCalledWith(deleteItem);
  }));
});
