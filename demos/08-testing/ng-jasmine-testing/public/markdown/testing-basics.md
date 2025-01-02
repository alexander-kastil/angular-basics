- Examine `simple-class.ts` and `simple-class.spec.ts`. Also look at `voucher-validator.ts` and `voucher-validator.spec.ts`

- Notice the First Test:

  ```typescript
  it('contains 12 characters', function () {
    expect(SimpleClass.sayHelloWorld().length).toEqual(12);
  });
  ```

- Run the Test using `ng test`. If you want to use headless mode, use: 

  ```bash
  ng test --browsers=ChromeHeadless
  ```

- If you want continuous feedback get your trial license at [Wallaby.js](https://wallabyjs.com/download/) and install [Wallaby for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode). It is also available for other IDEs like IntelliJ IDEA, WebStorm, ...