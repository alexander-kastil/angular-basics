import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FoodItem } from '../food.model';
import { FoodEditComponent } from './food-edit.component';

describe('FoodEditComponent', () => {
  let component: FoodEditComponent;
  let fixture: ComponentFixture<FoodEditComponent>;

  const mockFood: FoodItem = {
    id: 1,
    name: 'Pizza',
    price: 10,
    items: 5
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FoodEditComponent, NoopAnimationsModule],
      providers: [provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodEditComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('food', mockFood);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with food input data', () => {
    expect(component.form.value).toEqual(mockFood);
  });

  it('should emit food data when saveFood is called with valid form', () => {
    spyOn(component.onFoodSave, 'emit');
    component.saveFood(component.form);
    expect(component.onFoodSave.emit).toHaveBeenCalledWith(mockFood);
  });

  it('should emit when cancelEdit is called', () => {
    spyOn(component.onCancelEdit, 'emit');
    component.cancelEdit();
    expect(component.onCancelEdit.emit).toHaveBeenCalled();
  });

  it('should validate required fields', () => {
    component.form.patchValue({
      name: '',
      price: 0
    });
    expect(component.form.valid).toBeFalse();
  });

  it('should validate minimum length for name', () => {
    component.form.patchValue({
      name: 'ab'
    });
    expect(component.form.get('name')?.errors?.['minlength']).toBeTruthy();
  });

  it('should validate minimum value for price', () => {
    component.form.patchValue({
      price: 0
    });
    expect(component.form.get('price')?.errors?.['min']).toBeTruthy();
  });
});