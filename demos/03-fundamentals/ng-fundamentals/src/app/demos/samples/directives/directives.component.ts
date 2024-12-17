import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown/markdown-renderer/markdown-renderer.component';

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
  bgColor = 'blue';
  cssClass = 'big';

  changeColor() {
    this.bgColor = this.bgColor == 'blue' ? 'red' : 'blue';
  }

  changeClass() {
    this.cssClass = this.cssClass == 'big' ? 'small' : 'big';
  }

  getClass() {
    return 'my-' + this.cssClass;
  }
}
