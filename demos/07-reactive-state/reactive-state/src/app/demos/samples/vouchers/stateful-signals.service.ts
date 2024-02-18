import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Voucher } from './vouchers.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class StatefulSignalsService {
  http = inject(HttpClient);

  #vouchers = toSignal(this.http.get<Voucher[]>(`${environment.api}vouchers`));

  getAllVouchers() {
    return computed(() => this.#vouchers());
  }

  getVoucherById(id: number) {
    return computed(() => this.#vouchers()?.find((v) => v.ID == id));
  }

  // insertVoucher(v: Voucher) {
  //   this.http.post(environment.api, v).subscribe((result: any) => {                
  //     this.#vouchers.update((arr: Voucher[]) => [...arr, result as Voucher]);
  //   });
  // }

  // updateVoucher(v: Voucher) { 
  //   this.#vouchers.update((arr: Voucher[]) => arr.map((x) => x.ID === v.ID ? v : x));
  // }

  // deleteVoucher(id: number) {
  //   this.#vouchers.update((arr: Voucher[]) => arr.filter((v) => v.ID != id));
  // }

}
