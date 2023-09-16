# Food App Data Access

In this lab we will add data access to food-app. We will use [json-server](https://github.com/typicode/json-server) to provide a RESTful API for our food data. In real life you would use a backend service implemented in .NET or Spring to provide the data. 

## Steps Outlined

- Install [json-server](https://github.com/typicode/json-server):

    ```bash
    npm i -g json-server
    ```

- Create a database file for json-server (db.json) in the root of the starter project:

    ```json
    {
    "food": [
        { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },
        { "id": 2, "name": "Curry Wurst", "price": 2.7, "calories": 730 },
        { "id": 3, "name": "Blini with Salmon", "price": 8.3, "calories": 600 }
    ]}
    ```

- Start json-server:

    ```bash
    json-server db.json
    ```

- Add food.service.ts, implement Create, Read, Update and Delete against the json-server api and use it in your app. Use the following [reference](/demos/03-fundamentals/ng-fundamentals/src/app/skills/skills.service.ts)

    ```bash
    ng g s food/food
    ```

- If you want to generate and id for a new food item to be added, you could use this code fragment:

    ```typescript
    getNewId() {
        const nextId = this.food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;
        return nextId;
    }
    ```