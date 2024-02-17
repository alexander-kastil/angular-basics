import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-signal-forms',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './signal-forms.component.html',
  styleUrl: './signal-forms.component.scss'
})
export class SignalFormsComponent {

}
