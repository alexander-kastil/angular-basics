# Food App - Routing

In this lab we will add simple routing to the food app und load data from a REST API.

## Steps Outlined

- Implement Routing for the navbar elements
- Load data from a REST API

### Implement Routing for the navbar elements.

- Add an `about` component using the [Angular CLI](https://angular.io/cli/generate#component-command)

- In `app.component.html` replace `<app-food-container></app-food-container>` with a `<router-outlet></router-outlet>` 

- In `app.routes.ts` add the following routes and use them in app.config.ts: 

    ```typescript
    export const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "food", component: FoodContainerComponent },
        { path: "about", component: AboutComponent }
    ];
    ```
- Add [RouterLink](https://angular.io/api/router/RouterLink) directives to `navbar.component.html` to enable navigation. Apply a style for the active link - use [this reference](/demos/04-routing/routing-di/src/app/shared//navbar/navbar.component.html) for inspiration.

- Test the routing configuration

### Load data from a REST API

In this task we will add data access to food-app. We will use [json-server](https://github.com/typicode/json-server) to provide a RESTful API for our food data. In real life you would use a backend service implemented in .NET or Spring to provide the data. 


- Install [json-server](https://github.com/typicode/json-server):

    ```bash
    npm i -g json-server
    ```

- Create a database file for json-server (db.json) in the root of the starter project:

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

- Also add the entries from `menu-items.json` and update the `apiUrl` in the environment files to point to the json-server api.

    ```typescript
    export const environment = {
        apiUrl: 'http://localhost:3000/',
    };
    ```

- Start json-server in watch mode:

    ```bash
    json-server db.json --watch
    ```

- Extend `food.service.ts` to implement `Get`, `Create`, `Read`, `Update` and `Delete` against the json-server api and use it in your app. Use [skills.service.ts](/demos/04-routing/routing-di/src/app/skills/skills.service.ts) as a reference.

- After this lab you should be able to add, edit and delete food items in the app. In the next module we will enhance the user interface to provide a better user experience.