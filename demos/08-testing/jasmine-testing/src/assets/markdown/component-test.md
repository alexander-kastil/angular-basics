- Examine `simple-food.component.ts` & and `simple-food.component.spec.ts`. 

- The test mocks `food.service.ts` using a Jasmine Spy Object. Notice that whe are using `jasmine.createSpyObj()` to mock an Object and fake it's result using `.and.returnValue`:

```typescript
beforeEach(() => {
  mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
  mockFS.deleteItem.and.returnValue(of(serviceResult));
  comp = new FoodComponent(mockFS);
});
```

- We are also testing for the Component Interaction with the service:

```typescript
expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
```
