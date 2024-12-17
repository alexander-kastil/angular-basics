import { Component, inject, signal, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule } from 'ngx-markdown';
import { RendererStateService } from './renderer-state.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
  imports: [
    MarkdownModule,
    MatExpansionModule
  ]
})
export class MarkdownRendererComponent {
  readonly md = input.required<string>();
  state = inject(RendererStateService);
  panelOpenState = signal(false);
  isInit = false;

  ngOnInit() {
    this.isInit = true;
    this.panelOpenState.set(this.state.getVisible()());
    this.isInit = false;
  }

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md()}.md`;
  }

  setSate(visible: boolean) {
    if (this.isInit == false) {
      this.state.toggleVisible(visible);
      console.log('state:', this.panelOpenState());
    }
  }
}
