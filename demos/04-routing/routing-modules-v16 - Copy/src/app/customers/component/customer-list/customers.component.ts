import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../customer.model';
import { CustomersActions } from '../../state/customers.actions';
import { CustomersState, customersState } from '../../state/customers.state';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class CustomersComponent implements OnInit {
  state = inject(Store<CustomersState>);
  customers: Customer[] = [];

  ngOnInit(): void {
    this.state.dispatch(CustomersActions.loadCustomers());
    this.state.select(customersState.selectCustomers).subscribe((customer: Customer[]) => this.customers = customer);
  }
}
