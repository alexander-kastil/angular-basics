import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-expressions',
    templateUrl: './expressions.component.html',
    styleUrls: ['./expressions.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
    ],
})
export class ExpressionsComponent {

  title = 'Expressions & Interpolation';
  nbr = 7;
  isFalse = false;
  myObj = { a: 10, b: 20 };
  showOriginalDiv = true;

  addNumbers(a: number, b: number) {
    return a + b;
  }

  showDiv() {
    return this.showOriginalDiv;
  }
}
