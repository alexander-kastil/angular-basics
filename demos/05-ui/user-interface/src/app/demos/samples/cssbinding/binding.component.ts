import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        NgClass,
    ],
})
export class CSSBindingComponent {
  addClass = true;
  addStyle = true;
  anotherProperty = true;

  toggleBinding() {
    this.addClass = !this.addClass;
  }

  setClasses() {
    const classes = {
      thirdClass: this.addClass,
      anotherClass: this.anotherProperty,
    };
    return classes;
  }

  setStyles() {
    const styles = {
      'font-style': this.addStyle ? 'italic' : 'normal',
      'font-weight': this.anotherProperty ? 'bold' : 'normal',
    };
    return styles;
  }

  toggleStyle() {
    this.addStyle = !this.addStyle;
  }
}
