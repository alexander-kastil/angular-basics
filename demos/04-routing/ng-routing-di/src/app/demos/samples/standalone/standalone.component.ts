import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  standalone: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [
    MarkdownRendererComponent
  ],
})
export class StandaloneComponent {
  md = 'standalone';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
