import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatestWith, map, startWith, tap } from 'rxjs';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../vouchers.model';

@Component({
  selector: 'app-stateful-vouchers',
  templateUrl: './stateful-vouchers.component.html',
  styleUrls: ['./stateful-vouchers.component.scss'],
})
export class StatefulVouchersComponent implements OnInit {
  vs = inject(StatefulVoucherService);
  filter$ = new FormControl<string>('', { nonNullable: true });
  dataSource: MatTableDataSource<Voucher> = new MatTableDataSource<Voucher>([]);
  displayedColumns = ['ID', 'Text', 'Date', 'Amount', 'deleteItem'];

  ngOnInit() {
    this.vs
      .getAllVouchers()
      .pipe(
        // initialization: startWith('') will emit an empty string to the stream
        combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
        map(([vouchers, filter]) => {
          return filter == ''
            ? vouchers
            : vouchers.filter((v) => v.Text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
        })
      )
      .subscribe(
        (vouchers) => (this.dataSource = new MatTableDataSource(vouchers))
      );
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }

  deleteVoucher(v: Voucher) {
    this.vs.deleteVoucher(v.ID);
  }
}
