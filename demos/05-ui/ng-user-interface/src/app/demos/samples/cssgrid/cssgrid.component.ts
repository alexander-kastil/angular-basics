import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-cssgrid',
    templateUrl: './cssgrid.component.html',
    styleUrls: ['./cssgrid.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent],
})
export class CssgridComponent { }