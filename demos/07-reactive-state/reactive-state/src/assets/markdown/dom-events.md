- The fromEvent operator allows us to create observable streams from any HTML events. For example, we can use it to track the mouse movements over a canvas element.

  ```typescript
  fromEvent(this.canvas.nativeElement, 'mousemove')
  ```

- To see this in action, click on the "Subscribe Mouse Events" button and then move your cursor over the canvas area.
