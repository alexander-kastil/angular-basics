import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Voucher } from './vouchers.model';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  http = inject(HttpClient);

  getVouchers() {
    return this.http.get<Voucher[]>(`${environment.api}vouchers`);
  }
}
