import { Component, inject } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss',
  imports: [
    MarkdownRendererComponent
  ]
})
export class DependencyInjectionComponent {
  service = inject(DemoService);
  demos = this.service.getItems();
}
