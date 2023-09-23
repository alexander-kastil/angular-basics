import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-markdown-renderer',
    templateUrl: './markdown-renderer.component.html',
    styleUrls: ['./markdown-renderer.component.scss'],
    standalone: true,
    imports: [MatExpansionModule, MarkdownModule],
})
export class MarkdownRendererComponent {
  @Input() md: string = '';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
