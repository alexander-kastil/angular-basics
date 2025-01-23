import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { map } from 'rxjs';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-responsive-screen',
  templateUrl: './responsive-screen.component.html',
  styleUrls: ['./responsive-screen.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, MatCardModule, NgClass],
})
export class ResponsiveScreenComponent {
  breakpointObserver = inject(BreakpointObserver);

  class = toSignal(
    this.breakpointObserver.observe(['(min-width: 960px)']).pipe(
      map((state: BreakpointState) => {
        return state.matches ? 'largeClass' : 'smallClass';
      })
    ),
    { initialValue: 'smallClass' }
  );
}
