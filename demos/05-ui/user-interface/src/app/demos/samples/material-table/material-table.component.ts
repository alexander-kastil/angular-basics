import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Voucher } from './vouchers.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnInit {
  http = inject(HttpClient);
  dataSource: MatTableDataSource<Voucher> = new MatTableDataSource<Voucher>([]);
  displayedColumns = ['Text', 'Date', 'Amount', 'action'];

  ngOnInit() {
    this.http.get<Voucher[]>(`${environment.api}vouchers`).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: KeyboardEvent) {
    let filterVal = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (this.dataSource) {
      this.dataSource.filter = filterVal;
    }
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }
}
