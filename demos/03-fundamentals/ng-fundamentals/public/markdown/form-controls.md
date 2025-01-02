- FormControls can be used with or without forms. The following example shows how to use them without forms.

- They return observables which can be used to react to changes in the form control and which can be manipulated using observable operators.

  ```typescript
  export class FormControlsComponent {
    subsSearchterms: Subscription | null = null;
    searchterm = new FormControl<string | null>('');

    ngOnInit() {
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
