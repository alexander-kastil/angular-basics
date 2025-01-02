
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-param-map',
  templateUrl: './param-map.component.html',
  styleUrls: ['./param-map.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet
],
})
export class ParamMapComponent {
  links: { label: string; id: number; readonly: boolean }[] = [
    { label: 'Route A', id: 1, readonly: true },
    { label: 'Route B', id: 2, readonly: false },
    { label: 'Route C', id: 3, readonly: true },
  ];
}
