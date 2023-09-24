import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-evt-bus',
    templateUrl: './event-bus.component.html',
    styleUrls: ['./event-bus.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent],
})
export class EventBusComponent { }
