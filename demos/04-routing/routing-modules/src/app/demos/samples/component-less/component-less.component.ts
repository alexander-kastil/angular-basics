import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-less',
    templateUrl: './component-less.component.html',
    styleUrls: ['./component-less.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule, MatButtonModule, RouterLink]
})
export class ComponentLessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
