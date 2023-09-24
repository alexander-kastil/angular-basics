import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-preload',
    templateUrl: './preload.component.html',
    styleUrls: ['./preload.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class PreloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
