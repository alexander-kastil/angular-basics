- Angular virtual scroll solves the problem of rendering large lists or data sets efficiently by only rendering the visible portion of the list in the DOM. 

- This improves performance and reduces memory usage, especially when dealing with thousands or millions of items. It achieves this by dynamically loading and unloading items as the user scrolls, providing a smooth scrolling experience.

- Examine the `<cdk-virtual-scroll-viewport [itemSize]="16 * 9">` in `virtual-scroll.component.html`. Item size is set to 16 * 9, which is the height of each item multiplied by the number of items to be displayed at a time. This metrics is taken from a 4k screen resolution.