import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BoxedDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BoxedDirective,
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  fcShowMember = new FormControl(true);
  dogs = ['Flora', 'Cleo', 'Soi', 'Giro'];

  private loadedSignal = signal(false);

  loaded = computed(() => {
    setTimeout(() => {
      this.loadedSignal.set(true);
    }, 3000);
    return this.loadedSignal();
  });
}
