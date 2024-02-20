import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from './vouchers.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  http = inject(HttpClient);

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(`${environment.api}vouchers/`);
  }

  getVoucher(id: number) {
    return this.http.get<Voucher>(`${environment.api}vouchers/${id}`);
  }

  insertVoucher(voucher: Voucher) {
    return this.http.post<Voucher>(`${environment.api}vouchers/`, voucher);
  }

  updateVoucher(voucher: Voucher) {
    return this.http.put<Voucher>(`${environment.api}vouchers/`, voucher);
  }

  deleteVoucher(id: number) {
    return this.http.delete(`${environment.api}vouchers/${id}`);
  }
}
