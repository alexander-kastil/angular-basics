import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-inline-css',
    templateUrl: './inline-css.component.html',
    styles: [
        `h1 {
      color:red
    };
    div {
      margin-top: 2rem; font-weight: bold
    };`
    ],
    standalone: true,
    imports: [MatCardModule],
})
export class InlineCssComponent { }
