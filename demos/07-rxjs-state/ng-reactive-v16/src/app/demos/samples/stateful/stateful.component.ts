import { Component } from '@angular/core';
import { StatefulVoucherService } from '../vouchers/stateful-voucher.service';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.scss'],
  providers: [StatefulVoucherService],
})
export class StatefulComponent {}
