import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        NgStyle,
        NgClass,
    ],
})
export class DirectivesComponent {
  msg = 'Change my color';
  bgcolor = 'blue';
  cssclass = 'big';

  changeColor() {
    this.bgcolor = this.bgcolor == 'blue' ? 'red' : 'blue';
  }

  changeClass() {
    this.cssclass = this.cssclass == 'big' ? 'small' : 'big';
  }

  getClass() {
    return 'my-' + this.cssclass;
  }
}
