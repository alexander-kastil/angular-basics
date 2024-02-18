# Angular Testing

## Extensions

[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)

[Jasmine code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)

## Unit Testing

[Jasmine Matchers](https://jasmine.github.io/api/edge/matchers.html)

[Jest](https://jestjs.io/)

## Wallaby.js Test Runner

[Wallaby js](https://wallabyjs.com/)

[Wallaby VS Code Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)

## Debug Unit Tests

- Set a breakpoint in **app.component.spec.ts** on a line in one of the unit tests.

- Open a terminal at the root folder and run the tests using Angular CLI:

  > **Please note**: Running `npm run test` instead of `ng test` ensures tests are run with the version of @angular/cli specified in package.json.

  ```
  npm run test
  ```

- After the test run, go to the Debug view, select the **'ng test'** configuration, then press F5 or click the green button.

- When a browser opens with the test list, click the link for the test in which you placed the breakpoint. You should then hit the breakpoint:

![angular-test-breakpoint](https://user-images.githubusercontent.com/2836367/27004448-e5134ff8-4dce-11e7-8145-69de0956dd07.png)


## End to End Testing

[Cypress](https://www.cypress.io/)

[Playwright](https://playwright.dev/)

### Cypress

Run in two separate terminals

Serve the app:

```
ng s
```

Start Cypress:

```
npm run cypress
```