- Examine `container.component.html` and its use of `app-persons-list` and `app-person-edit` which makes use of the container/presenter pattern.

 - Notice the ngOnChanges lifecycle hook

  ```typescript
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person']) {
      console.log('receiving updated person:', changes['person'].currentValue);
    }
  }
  ```
