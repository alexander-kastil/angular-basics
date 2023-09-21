import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { StatefulVoucherService } from '../../demos/samples/vouchers/stateful-voucher.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss'],
})
export class SumComponent {
  vs = inject(StatefulVoucherService);
  sum = this.vs
    .getAllVouchers()
    .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));
}
