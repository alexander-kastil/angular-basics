import { Component, inject } from '@angular/core';
import { FormattingModule } from 'src/app/shared/formatting/formatting.module';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, FormattingModule, AsyncPipe, JsonPipe]
})
export class PreloadComponent {
  route = inject(ActivatedRoute);
  demos = this.route.data.pipe(map((data) => data['demos']));
}
