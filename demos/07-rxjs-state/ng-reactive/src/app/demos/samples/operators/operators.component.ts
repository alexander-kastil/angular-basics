import { Component, inject } from '@angular/core';
import {
  Observable,
  Subscription,
  forkJoin,
  from,
  interval,
  of,
  throwError,
} from 'rxjs';
import {
  catchError,
  combineLatestWith,
  delay,
  filter,
  finalize,
  find,
  map,
  take,
  tap,
} from 'rxjs/operators';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/vouchers.model';
import { DoublerService } from './doubler.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent {
  vs = inject(VouchersService);
  ds = inject(DoublerService);
  sub: Subscription | null = null;
  response: any;
  vouchers: Voucher[] = [];
  setLabel = (v: Voucher) => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  log = (msg: string, data: any) => {
    console.log(
      `executing: ${msg}, 'data' is Array: ${Array.isArray(data)}`,
      data
    );
    this.vouchers = Array.isArray(data) ? data : [data];
  };

  useMap() {
    this.vs
      .getVouchers()
      .pipe(
        // Obs Operator map()
        map((va) => {
          // ES6 array.map()
          return va.map((v) => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`,
          }));
        })
      )
      .subscribe((data) => this.log('use map() - RxJS 5 pattern', data));
  }

  useMapAndTap() {
    let arr$ = from([2, 10, 20]);

    arr$
      .pipe(
        tap((i) => console.log('tap before', i)),
        map((a) => a * 2),
        tap((f) => f * 10)
      )
      .subscribe((item) => console.log('result', item));
  }

  errHandling() {
    this.vs
      .getVouchers()
      .pipe(
        tap((data) => console.log('logged by tap(): ', data)),
        map((va) => va.map(this.setLabel)),
        catchError((err) => {
          return throwError('Err happened while processing vouchers');
        }),
        finalize(() => console.log('finalizing ...'))
      )
      .subscribe((data) => this.log('errHandling', data));
  }

  useFind() {
    // ES6 array.find() because stream is one marble containing an array
    this.vs
      .getVouchers()
      .pipe(map((arr) => arr.find((v: Voucher) => v.ID == 3)))
      .subscribe((data) => this.log('getByID - using find()', data));

    // RxJS find operator because array is converted of steam emmitting each item as a marble using from
    let arr = from([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
    arr.pipe(find((x) => x.id == 3)).subscribe((x) => console.log(x));
  }

  useFilter() {
    // ES6 array.filter() because stream is one marble containing an array
    this.vs
      .getVouchers()
      .pipe(map((arr) => arr.filter((v: Voucher) => v.Paid)))
      .subscribe((data) => this.log('useFilter', data));

    // RxJS filter operator because array is converted of steam emmitting each item as a marble using from
    let arr = from([
      { id: 1, disabled: true },
      { id: 2, disabled: false },
      { id: 3, disabled: false },
      { id: 4, disabled: true },
    ]);
    arr.pipe(filter((x) => x.disabled)).subscribe((x) => console.log(x));
  }

  // Compare the two outputs
  useTake() {
    this.vs
      .getVouchers()
      .pipe(take(3))
      .subscribe((data) => this.log('useTake', data));
  }

  useInterval() {
    interval(1000)
      .pipe(take(3))
      .subscribe((x) => console.log(x));
  }

  useDelay() {
    const fakeObservable = of(['hund', 'katze', 'maus']).pipe(delay(5000));
    console.log('before delay execution - waiting 5 secs');
    fakeObservable.subscribe((data) => console.log(data));
  }

  public requestMockVM(): Observable<number[]> {
    const response1 = this.ds.double(3);
    const response2 = this.ds.double(9);
    const response3 = this.ds.double(2);
    return forkJoin([response1, response2, response3]);
  }

  useSwitchmap() { }

  useCombineLatestWith() {
    this.vs
      .getVouchers()
      .pipe(
        // Mocking a filter emmitting "BP Tankstelle"
        combineLatestWith(of('BP Tankstelle')),
        map(([vouchers, filter]) => {
          return filter == ''
            ? vouchers
            : vouchers.filter((v: Voucher) => v.Text.includes(filter));
        })
      )
      .subscribe((data) => this.log('useCombineLatestWith', data));
  }

  useForkJoin() {
    this.requestMockVM().subscribe((arr) => {
      this.response = arr;
    });
  }
}
