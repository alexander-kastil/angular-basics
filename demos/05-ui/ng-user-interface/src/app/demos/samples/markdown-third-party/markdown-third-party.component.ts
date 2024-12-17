import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-markdown-third-party',
    templateUrl: './markdown-third-party.component.html',
    styleUrls: ['./markdown-third-party.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class MarkdownThirdPartyComponent { }
