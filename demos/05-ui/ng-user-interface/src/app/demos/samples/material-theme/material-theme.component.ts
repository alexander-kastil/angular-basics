import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-material-theme',
    templateUrl: './material-theme.component.html',
    styleUrls: ['./material-theme.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class MaterialThemeComponent { }