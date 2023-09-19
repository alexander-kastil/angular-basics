import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../customer.model';
import { CustomersActions } from '../../state/customers.actions';
import { CustomersState } from '../../state/customers.reducer';
import { getCustomers } from '../../state/customers.selector';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  state = inject(Store<CustomersState>);
  customers: Customer[] = [];

  ngOnInit(): void {
    this.state.dispatch(CustomersActions.loadCustomers());
    this.state.select(getCustomers).subscribe((customer: Customer[]) => this.customers = customer);
  }
}
