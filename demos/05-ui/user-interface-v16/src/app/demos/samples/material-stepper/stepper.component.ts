import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
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
