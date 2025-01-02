import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodContainerComponent } from './food-container.component';
import { FoodStateService } from '../food-state.service';
import { FoodItem } from '../food.model';

describe('FoodContainerComponent', () => {
    let component: FoodContainerComponent;
    let fixture: ComponentFixture<FoodContainerComponent>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj('FoodStateService', ['getFood', 'deleteFood', 'addFood', 'updateFood']);
        spy.getFood.and.returnValue([]);

        await TestBed.configureTestingModule({
            imports: [FoodContainerComponent],
            providers: [
                { provide: FoodStateService, useValue: spy }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(FoodContainerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select food item', () => {
        const testFood: FoodItem = { id: 1, name: 'Test Food', price: 10, items: 5 };
        component.selectFood(testFood);
        expect(component.selected).toEqual(testFood);
        expect(component.selected).not.toBe(testFood); // Should be a copy
    });

    it('should delete food item', () => {
        const testFood: FoodItem = { id: 1, name: 'Test Food', price: 10, items: 5 };
        component.deleteFood(testFood);
        expect(component.fs.deleteFood).toHaveBeenCalledWith(1);
    });

    it('should add new food item', () => {
        const testFood: FoodItem = { id: 1, name: 'Test Food', price: 10, items: 5 };
        component.foodSaved(testFood);
        expect(component.selected).toBeNull();
    });

    it('should update existing food item', () => {
        const testFood: FoodItem = { id: 1, name: 'Test Food', price: 10, items: 5 };
        component.foodSaved(testFood);
        expect(component.fs.updateFood).toHaveBeenCalledWith(testFood);
        expect(component.selected).toBeNull();
    });

    it('should prepare new food item for adding', () => {
        component.addFood();
        expect(component.selected).toBeTruthy();
        expect(component.selected?.id).toBe(0);
    });

    it('should cancel editing', () => {
        const testFood = new FoodItem();
        component.selected = testFood;
        component.cancelEdit();
        expect(component.selected).toBeNull();
    });
});