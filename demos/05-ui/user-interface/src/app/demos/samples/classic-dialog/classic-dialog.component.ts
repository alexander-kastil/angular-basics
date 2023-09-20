import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-classic-dialog',
  templateUrl: './classic-dialog.component.html',
  styleUrls: ['./classic-dialog.component.scss'],
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
