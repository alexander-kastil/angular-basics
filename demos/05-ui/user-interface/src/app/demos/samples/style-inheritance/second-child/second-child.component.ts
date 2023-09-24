import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-second-child',
    template: ` <div class="divclass">Second Child</div> `,
    styles: [
        `
    .divclass {
      border: green 4px solid;
    }
  `,
    ],
    standalone: true,
})
export class SecondChildComponent { }
