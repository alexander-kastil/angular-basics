# Implement Routing  
   
In this lab, we will enhance the functionality of our food application by incorporating simple routing and establishing data connections with a REST API. The first part of this lab focuses on implementing navigation routes for different components, while the second part involves loading food data using a mock REST API provided by json-server. By the end of this lab, you will have a foundational understanding of routing in Angular and how to integrate external data sources into your application.  
   
## Steps Outlined  
- Implement Routing for the navbar elements  
- Load data from a REST API  
   
### Implement Routing for the navbar elements  
To begin with, we will add an `about` component to our application, enabling users to navigate to it seamlessly. Follow the steps below to implement routing for the navbar elements:  
   
1. **Add an `about` component**: Utilize the [Angular CLI](https://angular.io/cli/generate#component-command) to generate a new component called `AboutComponent`.  
   
2. **Update the main template**: In `app.component.html`, replace the existing `<app-food-container></app-food-container>` with a `<router-outlet></router-outlet>` tag. This outlet will serve as the placeholder for the routed components.  
   
3. **Define application routes**: Open `app.routes.ts` and define the necessary routes for your application. Include the following code to set up the routing paths:  
  
   ```typescript  
   export const routes: Routes = [  
       { path: "", component: HomeComponent },  
       { path: "food", component: FoodContainerComponent },  
       { path: "about", component: AboutComponent }  
   ];  
   ```  
   
4. **Implement navigation links**: In `navbar.component.html`, add [RouterLink](https://angular.io/api/router/RouterLink) directives to enable navigation between your components. Additionally, ensure to apply styles for the active link to enhance user experience. You can refer to the following example for inspiration: [Navbar Component Example](/demos/04-routing/ng-routing-di/src/app/shared/navbar/navbar.component.html).  
   
5. **Test the routing configuration**: Finally, verify that the routing setup works as expected by navigating through the application and checking that the correct components render based on the selected route.  
   
### Load data from a REST API  
In this section, we will integrate data access into our food application using [json-server](https://github.com/typicode/json-server) to simulate a RESTful API for our food items. This practice prepares you for working with real backend services in future projects.  
   
1. **Install json-server**: Use the following command to install json-server globally:  
  
   ```bash  
   npm i -g json-server  
   ```  
   
2. **Create a database file**: In the root directory of the starter project, create a file named `db.json` and populate it with the following data structure for food items:  
  
   ```json  
   {  
       "food": [  
           { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },  
           { "id": 2, "name": "Wiener Schnitzel vom Schwein", "price": 12.7, "calories": 730 },  
           { "id": 3, "name": "Boeuf Stroganoff", "price": 18.3, "calories": 600 },  
           { "id": 4, "name": "Pad Ka Prao", "price": 16.3, "calories": 600 }  
       ]  
   }  
   ```  
   
3. **Update the API URL**: Include the entries from `menu-items.json` into your `db.json`, and then update the `apiUrl` in your environment files to direct requests to the json-server API:  
  
   ```typescript  
   export const environment = {  
       apiUrl: 'http://localhost:3000/',  
   };  
   ```  

4: **Test your work**: Execute the following commands in separate terminal windows to start the Angular application and json-server:  
   
   ```bash  
   ng serve  
   ```  
   
   ```bash  
   json-server --watch db.json  
   ```  
   
   Verify that the application can successfully retrieve food items from the REST API and display them accordingly.   