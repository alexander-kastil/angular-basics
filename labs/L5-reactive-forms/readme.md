# Using Signals and Reactive Forms  
   
In this lab, we will enhance the Food Edit Component by transforming it into a Reactive Form utilizing Angular's FormBuilder. This will include implementing validations to ensure that the food name is required with a minimum length of 3 characters, and that the price is a positive value. Additionally, we will refactor the food feature to incorporate Signals, thereby optimizing state management within our application.  
   
## Steps Outlined  
- Implementing Reactive Forms  
   
## Implementing Reactive Forms  
1. Refactor the `food-container.component`, `food-list.component`, and `food-edit.component` to utilize Reactive Forms through the FormBuilder service. For guidance and best practices, refer to the [Signal-based Container / Presenter Demo](/demos/06-forms/forms/src/app/demos/samples/container-forms/).  
     
2. Implement validation rules for the food name to ensure it is both required and has a minimum length of 3 characters. Additionally, enforce validation on the price field to confirm that it is a positive number.   
  
By following these steps, you will create a robust and user-friendly food editing interface that adheres to Angular best practices.