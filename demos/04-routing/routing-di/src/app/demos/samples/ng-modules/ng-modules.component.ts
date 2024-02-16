import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-ng-modules',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './ng-modules.component.html',
  styleUrl: './ng-modules.component.scss'
})
export class NgModulesComponent {

}
