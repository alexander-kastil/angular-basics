import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent],
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}
