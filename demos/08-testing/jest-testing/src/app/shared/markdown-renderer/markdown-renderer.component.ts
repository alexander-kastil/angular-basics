import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule,
    MatExpansionModule,
  ],
})
export class MarkdownRendererComponent {
  @Input({ required: true }) md = '';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
