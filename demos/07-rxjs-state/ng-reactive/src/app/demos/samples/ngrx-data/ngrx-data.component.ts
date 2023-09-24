import { Component } from '@angular/core';
import { BorderDirective, CenteredDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-data',
    templateUrl: './ngrx-data.component.html',
    styleUrls: ['./ngrx-data.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, BorderDirective, CenteredDirective]
})
export class NgrxDataComponent { }
