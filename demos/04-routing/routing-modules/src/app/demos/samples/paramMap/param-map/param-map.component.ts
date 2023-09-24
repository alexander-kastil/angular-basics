import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-param-map',
    templateUrl: './param-map.component.html',
    styleUrls: ['./param-map.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        NgFor,
        MatButtonModule,
        RouterLink,
        RouterOutlet,
    ],
})
export class ParamMapComponent implements OnInit {
  constructor() {}

  links: { label: string; id: number; readonly: boolean }[] = [
    { label: 'Route A', id: 1, readonly: true },
    { label: 'Route B', id: 2, readonly: false },
    { label: 'Route C', id: 3, readonly: true },
  ];

  ngOnInit() {}
}
