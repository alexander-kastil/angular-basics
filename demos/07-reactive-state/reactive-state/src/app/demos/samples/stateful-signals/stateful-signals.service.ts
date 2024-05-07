import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Voucher } from '../vouchers/vouchers.model';
import { VouchersService } from '../vouchers/voucher.service';

@Injectable({
  providedIn: 'root'
})
export class StatefulSignalsService {
  http = inject(HttpClient);
  vs = inject(VouchersService);
  #vouchers: WritableSignal<Voucher[]> = signal<Voucher[]>([]);

  constructor() {
    this.http.get<Voucher[]>(`${environment.api}vouchers`).subscribe((data) => {
      this.#vouchers.set(data);
    });
  }

  getAllVouchers() {
    return computed(() => this.#vouchers());
    // return this.#vouchers.asReadonly();
  }

  getVoucherById(id: number) {
    return computed(() => this.#vouchers()?.find((v) => v.ID == id));
  }

  insertVoucher(v: Voucher) {
    this.http.post<Voucher>(`${environment.api}vouchers`, v).subscribe(result => {
      this.#vouchers.update((arr: Voucher[]) => [...arr, result]);
    });
  }

  updateVoucher(v: Voucher) {
    this.http.put(`${environment.api}vouchers`, v).subscribe(() => {
      this.#vouchers.update((arr: Voucher[]) => arr.map((item) => (item.ID === v.ID ? v : item)));
    });
  }

  deleteVoucher(id: number) {
    // You can also separate the state from the rest calls
    // This is basically what most state management libraries do
    // Applies to all CRUD operations

    // this.http.delete(`${environment.api}vouchers/${id}`).subscribe(() => {
    //   this.#vouchers.update((arr: Voucher[]) => arr.filter((v) => v.ID != id));
    // });

    this.vs.deleteVoucher(id).subscribe(() => {
      this.#vouchers.update((arr: Voucher[]) => arr.filter((v) => v.ID != id));
    });
  }
}
