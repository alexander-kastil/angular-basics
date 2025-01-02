- Examine `component-events.component.ts` to learn about component events.

- In this sample we are clicking a button twice and later we will check the value of a variable that is incremented by the button click.

    ```typescript
    const divClick = fixture.debugElement.query(By.css('[data-testid=btnIncrement]'));
    divClick.nativeElement.click();
    divClick.nativeElement.click();
    ```