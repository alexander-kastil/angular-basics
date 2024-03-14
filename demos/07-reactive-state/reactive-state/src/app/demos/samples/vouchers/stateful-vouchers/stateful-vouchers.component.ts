import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { combineLatestWith, map, startWith, tap } from 'rxjs';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../vouchers.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stateful-vouchers',
  templateUrl: './stateful-vouchers.component.html',
  styleUrls: ['./stateful-vouchers.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    CurrencyPipe,
    DatePipe,
  ],
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
        combineLatestWith(
          this.filter$.valueChanges.pipe(
            startWith('')
          )
        ),
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
