import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplitPopupComponent } from './split-popup/split-popup.component';
import { uxButtonComponent } from './ux-button/ux-button.component';
import { uxSplitComponent } from './ux-split/ux-split.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-content-projection',
    templateUrl: './content-projection.component.html',
    styleUrls: ['./content-projection.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        uxSplitComponent,
        uxButtonComponent,
    ],
})
export class ContentProjectionComponent {
  dialog = inject(MatDialog);
  isDisabled = true;

  openPopup(): void {
    const dialogRef = this.dialog.open(SplitPopupComponent, {
      width: '90vw',
      data: { main: 'this is main', toolbar: 'toolbar' },
    });
  }
}
