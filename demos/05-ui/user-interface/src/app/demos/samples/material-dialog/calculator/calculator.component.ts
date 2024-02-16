import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CalcParam } from './calculatorParam.model';
import { CurrencyService } from './currency.service';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CurrencyPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss'],
    standalone: true,
    imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule,
    CurrencyPipe
],
})
export class CalculatorComponent {
  rates: Map<string, number> = new Map<string, number>();
  currencies: string[] = [];
  selectedCurrency = 'THB';
  rate: number | undefined;
  converted: number = 0;
  fcAmount = new FormControl(this.data.amount);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CalcParam,
    private cs: CurrencyService
  ) { }

  onNoClick(): void { }

  ngOnInit() {
    this.cs.getRates().subscribe((data) => {
      this.getCurrencies(data.rates);
      this.calculate();
    });
  }

  getCurrencies(rates: any) {
    Object.keys(rates).forEach((prop) => {
      this.currencies.push(prop);
      this.rates.set(prop, rates[prop]);
    });
  }

  calculate() {
    this.rate = this.rates.get(this.selectedCurrency);
    if (this.rate) {
      this.converted = this.data.amount / this.rate;
    }
  }

  getRate(curr: string): number {
    const rate = this.rates.get(curr);
    return rate != undefined ? rate : 0;
  }
}
