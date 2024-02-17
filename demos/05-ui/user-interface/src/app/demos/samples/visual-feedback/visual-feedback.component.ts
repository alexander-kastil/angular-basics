import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-visual-feedback',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './visual-feedback.component.html',
  styleUrl: './visual-feedback.component.scss'
})
export class VisualFeedbackComponent {

}
