import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-classic-dialog',
    templateUrl: './classic-dialog.component.html',
    styleUrls: ['./classic-dialog.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
    ],
})
export class ClassicDialogComponent {
  dialog = inject(MatDialog);
  paramName = 'Giro';

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40vw',
      data: { name: this.paramName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Result from mat-dialog:', result);
    });
  }
}
