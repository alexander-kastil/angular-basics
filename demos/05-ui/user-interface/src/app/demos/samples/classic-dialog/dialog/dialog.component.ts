import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ClassicDialogComponent } from '../classic-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        MatButtonModule,
    ],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClassicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) { }

  fcName = new FormControl(this.data.name, [Validators.required]);

  getErrorMessage() {
    return 'Name is required';
  }
}
