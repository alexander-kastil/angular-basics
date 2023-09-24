import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Voucher } from './vouchers.model';
import { environment } from 'src/environments/environment';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-material-table',
    templateUrl: './material-table.component.html',
    styleUrls: ['./material-table.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        CurrencyPipe,
        DatePipe,
    ],
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
