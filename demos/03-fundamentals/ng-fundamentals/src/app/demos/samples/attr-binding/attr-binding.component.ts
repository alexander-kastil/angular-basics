import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

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
  isDisabled = true;
  isHidden = false;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
