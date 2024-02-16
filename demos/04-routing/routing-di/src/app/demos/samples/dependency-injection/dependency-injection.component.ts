import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BorderDirective, CenteredDirective } from 'src/app/shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss',
  imports: [MarkdownRendererComponent, BorderDirective, CenteredDirective, AsyncPipe]
})
export class DependencyInjectionComponent {
  service = inject(DemoService);
  demos = this.service.getDemos();
}
