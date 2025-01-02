- Examine `component-write.component.ts` to learn about how to interact with the DOM.

- Besides querying the DOM, you can also write to inputs and listen to events. In this case the dispatchEvent is used to simulate a user typing in the input field.

    ```typescript
    const input = fixture.debugElement.query(By.css('[data-testid=username]'));
    const el = input.nativeElement as HTMLInputElement;
    el.value = soi;
    el.dispatchEvent(new Event('input'));
    ```