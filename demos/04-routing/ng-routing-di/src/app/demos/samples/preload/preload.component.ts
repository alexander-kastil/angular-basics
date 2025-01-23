import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { BoxedMarginedDirective } from '../../../shared/formatting/formatting-directives';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, JsonPipe, BoxedMarginedDirective],
})
export class PreloadComponent {
  route = inject(ActivatedRoute);
  demos = toSignal(this.route.data.pipe(map((data) => data['demos'])));
}
