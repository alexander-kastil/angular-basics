- When using Reactive Forms & FormControls, you can use the `valueChanges` observable to listen to changes on the FormControl. This is a great way to implement debouncing on search fields. You can use the `debounceTime` operator to wait a certain amount of time after each keystroke before emitting the value. This way you can prevent unnecessary API calls.

```typescript
this.subsSearchterms = this.searchterm.valueChanges
  .pipe(
    debounceTime(750) // wait 750ms after each keystroke
    //operator 2
    //operator 3
  )
  .subscribe((val) => {
    console.log('Currently your searching debounced for:', val);
  });
```
