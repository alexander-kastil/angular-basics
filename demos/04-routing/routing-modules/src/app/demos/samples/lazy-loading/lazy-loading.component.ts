import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-lazy-loading',
    templateUrl: './lazy-loading.component.html',
    styleUrls: ['./lazy-loading.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class LazyLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
