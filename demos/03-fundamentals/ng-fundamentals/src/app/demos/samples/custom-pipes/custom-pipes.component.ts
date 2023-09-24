import { Component, OnInit, inject } from '@angular/core';
import { Voucher } from '../vouchers/vouchers.model';
import { VouchersService } from '../vouchers/voucher.service';
import { CheckPipe } from './check.pipe';
import { EuroPipe } from './euro.pipe';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-custom-pipes',
    templateUrl: './custom-pipes.component.html',
    styleUrls: ['./custom-pipes.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        FormsModule,
        EuroPipe,
        CheckPipe,
    ],
})
export class CustomPipesComponent implements OnInit {
  vs = inject(VouchersService);
  isChecked = false;
  price = 12.33;
  vouchers: Voucher[] = [];

  currentFilter: string = '';

  ngOnInit() {
    this.vs
      .getVouchers()
      .subscribe((data: Voucher[]) => (this.vouchers = data));
  }

  showVoucher(id: number) {
    console.log(
      `navigating to voucher with id ${id} - covered later in more detail`
    );
  }
}
