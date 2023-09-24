import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss'],
})
export class MaterialDialogComponent {
  dialog = inject(MatDialog);
  amount: number = 100;
  name: string = '';
  calculated: boolean = false;
  msg: string = '';

  openCalculator(): void {
    let dialogRef = this.dialog.open(CalculatorComponent, {
      width: '40vw',
      data: { amount: this.amount },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.msg = `Thank you for exchanging ${result} €`;
    });
  }
}
