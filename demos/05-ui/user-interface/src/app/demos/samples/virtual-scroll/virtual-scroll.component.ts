import { CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
    styleUrls: ['./virtual-scroll.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
    ],
})
export class VirtualScrollComponent {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  viewport: CdkVirtualScrollViewport | null = null;
}
