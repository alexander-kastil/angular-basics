import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map } from 'rxjs/operators';
import { StatefulVoucherService } from '../vouchers/stateful-voucher.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, AsyncPipe],
})
export class SumComponent {
  vs = inject(StatefulVoucherService);

  sum = this.vs
    .getAllVouchers()
    .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));
}
