- Examine `stateful-voucher.service.ts` and its use of the BehaviorSubject. Examine how it is injected and used in `stateful-vouchers.component.ts`.

    ```typescript
    export class StatefulVoucherService {
        private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject<Voucher[]>([]);

        constructor(private httpClient: HttpClient) {
            this.httpClient.get<Voucher[]>(environment.apiUrl).subscribe((data) => {
            this.vouchers.next(data);
            });
            this.addLateVoucher();
        }
    ```
- Add the app-sum to the `stateful.component.html` and discuss it's implementation code:

    ```typescript
    constructor(private vs: StatefulVoucherService) {}
    sum = this.vs.getAllVouchers()
        .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));
    ``` 