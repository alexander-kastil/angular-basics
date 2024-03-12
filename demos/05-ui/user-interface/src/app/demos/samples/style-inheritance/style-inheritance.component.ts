import { Component, ViewEncapsulation } from '@angular/core';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-style-inheritance',
    templateUrl: './style-inheritance.component.html',
    styleUrls: ['./style-inheritance.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, FirstChildComponent, SecondChildComponent],
    encapsulation: ViewEncapsulation.Emulated
})
export class StyleInheritanceComponent { }
