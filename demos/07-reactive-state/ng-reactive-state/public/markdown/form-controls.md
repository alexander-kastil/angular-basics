- `Reactive Forms` & `FormControls` provide a convenient way to track changes on the input fields. You can subscribe to the `valueChanges` observable of a `FormControl` and perform actions based on the input value. 

- For example, you can implement a debounced search feature by using the `debounceTime` operator. This operator will delay the emission of the value until a specified time has elapsed after the last keystroke. This will help you avoid making unnecessary API calls for every input change.

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
