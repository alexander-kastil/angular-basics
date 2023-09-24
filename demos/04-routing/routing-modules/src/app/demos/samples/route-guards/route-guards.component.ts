import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-route-guards',
    templateUrl: './route-guards.component.html',
    styleUrls: ['./route-guards.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        RouterLink,
    ],
})
export class RouteGuardsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
