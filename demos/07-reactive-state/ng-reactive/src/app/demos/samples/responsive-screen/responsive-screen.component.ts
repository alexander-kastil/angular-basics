import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-responsive-screen',
    templateUrl: './responsive-screen.component.html',
    styleUrls: ['./responsive-screen.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule, NgClass]
})
export class ResponsiveScreenComponent implements OnInit {
  breakpointObserver = inject(BreakpointObserver);
  matches = false;

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 960px)'])
      .subscribe((state: BreakpointState) => {
        this.matches = state.matches ? false : true;
      })
  }

  getClass() {
    return this.matches ? 'smallClass' : 'largeClass';
  }
}
