# Testing

In this lab we will complete some unit tests to ensure that our application is working as expected.

## Steps Outlined

### Setup of testing environment - optional

- Install [Wallaby.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode) - (optional) 

    >Note: Wallyby.js is also available for [JetBrains products](https://plugins.jetbrains.com/plugin/15742-wallaby)

    ```bash
    code --install-extension wallabyjs.wallaby-vscode
    ```

- Get your [Wallaby-Trial-Key](https://wallabyjs.com/download/) and apply your License key press `F1 -> Wallaby.js: Manage License Key` and enter your key.

- Activate Wallaby using `F1 -> Wallaby.js: Start`

- Notice the Wallaby indicator on the right bottom of Visual Studio Code

    ![wallaby](_images/wallaby.png)

### Implement Testing

- Complete the pending tests in the following files:

    - food.service.spec.ts
    - navbar.component.spec.ts
    - food-list.component.spec.ts
    - food-edit.component.spec.ts
    - food-container.component.spec.ts
    
    > Note: Mock data is provided in `food.mocks.ts`

- Try to reach a [code coverage](https://angular.io/guide/testing-code-coverage) of more than 80%