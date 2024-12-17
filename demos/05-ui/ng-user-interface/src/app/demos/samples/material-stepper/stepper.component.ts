import { Component, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
    ],
})
export class StepperComponent {
  @ViewChild('stepper', { static: true }) stepper: MatStepper | null = null;
  amount: number = 100;
  name: string = '';
  calculated: boolean = false;
  msg: string = '';

  completeConvert(result: number) {
    this.msg = `Thank you for exchanging ${result} €`;
    this.calculated = true;
    if (this.stepper) this.stepper.next();
  }
}
