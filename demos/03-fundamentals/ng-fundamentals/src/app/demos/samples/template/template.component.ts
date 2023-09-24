import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule],
})
export class TemplateComponent {
  title = 'About Templated Components';
  theValue = 100;

  doDouble() {
    return this.theValue * 2;
  }
}
