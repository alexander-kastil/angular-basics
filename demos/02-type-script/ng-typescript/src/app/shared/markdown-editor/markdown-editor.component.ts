import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-markdown-editor',
    templateUrl: './markdown-editor.component.html',
    styleUrls: ['./markdown-editor.component.scss'],
    imports: [
        MatCardModule
    ]
})
export class MarkdownEditorComponent { }
