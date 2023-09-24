import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'ux-split',
    templateUrl: './ux-split.component.html',
    styleUrls: ['./ux-split.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatDialogModule],
})
export class uxSplitComponent {
  toolbar = '100px';
}
