import { Component, ViewEncapsulation } from '@angular/core';
import { NestedChildComponent } from '../nested-child/nested-child.component';

@Component({
    selector: 'app-first-child',
    template: `
    <div class="divclass">First Child</div>
    <h3>I am h3 in first child</h3>
    <div>
      <app-nested-child></app-nested-child>
    </div>
  `,
    styles: [
        `.divclass {
        border: blue 4px solid;
      };
      h3 {
        margin: 2rem;
      };
    `
    ],
    standalone: true,
    imports: [NestedChildComponent],
})
export class FirstChildComponent { }
