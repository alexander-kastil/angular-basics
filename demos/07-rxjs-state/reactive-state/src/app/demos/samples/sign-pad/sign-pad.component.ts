import { Component, DestroyRef, ElementRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, fromEvent, map, tap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { BorderDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-sign-pad',
    templateUrl: './sign-pad.component.html',
    styleUrls: ['./sign-pad.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        BorderDirective,
        MatButtonModule,
    ],
})
export class SignPadComponent {
  @ViewChild('signPad', { static: true }) canvas: ElementRef | null = null;
  destroy = inject(DestroyRef);
  subMouseEvents: Subscription | null = null;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  subscribeMouseEvts() {
    if (this.canvas) {
      const evtMouse = fromEvent(this.canvas.nativeElement, 'mousemove').pipe(
        takeUntilDestroyed(this.destroy),
        tap((data: any) => console.log('original data', data)),
        map((evt: MouseEvent) => {
          return { X: evt.clientX, Y: evt.clientY };
        }),
        tap((data: any) => console.log('modfied data', data))
      );

      evtMouse.subscribe((point) => {
        this.result = point;
        console.log('Mouse Moved @: ', point);
      });
    }
  }

}
