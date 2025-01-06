# Implement the Container / Presenter Pattern  
   
In this lab, we will explore the implementation of the Container / Presenter pattern to efficiently manage food items in an Angular application. By structuring our components in this way, we separate the logic of data management from the presentation layer, enabling a cleaner architecture and better maintainability. Throughout the lab, you will scaffold necessary components, implement service interactions, and create user interfaces that allow for seamless interaction with food items.  
   
## Steps Outlined  
- Scaffold the components for the container / presenter pattern  
- Implement the container component  
- Implement the list component  
- Implement the edit component  
   
## Scaffold the components for the container / presenter pattern  
To begin, we will establish a dedicated folder for our food-related components. Create a folder named `food` within the `app` directory to encapsulate all relevant artifacts pertaining to food management. Note that in standalone applications, the concept of feature modules has evolved, and we will simply use folders to organize our components.  
   
Utilize the Angular CLI to generate the following nested components:  
- `food/food-container` -> This will serve as the container component.  
- `food/food-list` -> This will be nested inside the container.  
- `food/food-edit` -> This will also be nested inside the container.  
   
You can scaffold these components using the following command:  
```bash  
ng g component food/food-container  
```  
> Note: Please repeat the command for `food-list` and `food-edit`.  
   
Next, import the `FoodContainerComponent` into `app.component.ts`:  
```typescript  
@Component({  
  selector: 'app-root',  
  standalone: true,  
  imports: [  
    ...,  
    FoodContainerComponent  
  ],  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
```  
Subsequently, replace `<app-home>` with `<app-food-container>` in `app.component.html`. Direct routing to a `food-route` will be addressed in future modules. The updated HTML should look like this:  
```html  
<div class="main">  
    <app-food-container></app-food-container>  
</div>  
```  
Additionally, create a `food.model.ts` file within the `app/food` directory to define the structure of our food items:  
```typescript  
export class FoodItem {  
    id = 0;  
    name = "";  
    price = 0;  
    calories = 0;  
}  
```  
Next, add a `food.json` file to the assets folder:  
> Note: As this project was scaffolded with an earlier version of Angular CLI, the assets folder is utilized instead of `public`.  
```json  
[  
    { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },  
    { "id": 2, "name": "Wiener Schnitzel vom Schwein", "price": 12.7, "calories": 730 },  
    { "id": 3, "name": "Boeuf Stroganoff", "price": 18.3, "calories": 600 },  
    { "id": 4, "name": "Pad Ka Prao", "price": 16.3, "calories": 600 }  
]  
```  
Afterward, implement a `food/food-service.ts` using the client-side model defined in `food.model.ts`:  
```bash  
ng g service food/food  
```  
Inject the [Angular HttpClient](https://angular.io/guide/http) into `food/food-service.ts` and develop a `getFood()` method within the `FoodService` to load data from `assets/food.json`. Reference the `navbar.service.ts` as a guide for implementation.  
   
## Implement the container component  
In this step, we will construct the core logic of our application by implementing the Container-Presenter Pattern within `