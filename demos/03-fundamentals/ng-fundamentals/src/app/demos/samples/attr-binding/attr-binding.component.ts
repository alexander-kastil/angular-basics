import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AttrBindingComponent {
  isDisabled = signal(true)
  isHidden = signal(false)
  name = signal('John Doe');

  toggleDisabled() {
    this.isDisabled.set(!this.isDisabled());
  }

  toggleHidden() {
    this.isHidden.set(!this.isHidden());
  }
}
