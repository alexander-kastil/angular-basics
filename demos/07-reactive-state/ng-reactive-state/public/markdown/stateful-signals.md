- An alternative to managing client side state in services is to use stateful signals. 

- A stateful signal is a signal that has a state associated with it. This state can be used to store the current value of the signal, and can be updated by the signal itself. 

- This allows you to create a signal that can be used to store the state of a component, and can be updated by the component itself. This is useful for creating components that need to store state, but don't want to use services to manage that state.

- Examine `stateful-signals.component.ts` consumes `stateful-signals.service.ts`. It returns computed signals to prevent modifying the state directly.

    ```typescript
    export class StatefulSignalsService {
    http = inject(HttpClient);

    #vouchers = toSignal(this.http.get<Voucher[]>(`${environment.api}vouchers`));

    getAllVouchers() {
        return computed(() => this.#vouchers());
    }

    getVoucherById(id: number) {
        return computed(() => this.#vouchers()?.find((v) => v.ID == id));
    }
    ```

- The data from the injected service `getAllVouchers()` method can be rendered in `stateful-signals.component.html`:

    ```html
    <div boxed>
        <h3>Current Vouchers - hover & click to remove</h3>
        @for (v of vouchers(); track $index) {
            <div class="item" (click)="removeVoucher(v.ID)">{{ v.Text }}</div>
        }
    </div>
    ```