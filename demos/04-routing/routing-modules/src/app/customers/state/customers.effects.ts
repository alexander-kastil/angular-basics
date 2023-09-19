
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { CustomersActions } from './customers.actions';
import { Customer } from '../customer.model';

export const loadCustomers$ = createEffect((actions$ = inject(Actions), service = inject(CustomersService)) => {
  return actions$.pipe(
    ofType(CustomersActions.loadCustomers),
    mergeMap(() =>
      service.getCustomers().pipe(
        map((customers: Customer[]) =>
          CustomersActions.loadCustomersSuccess({ items: customers })
        ),
        catchError((err: Error) => of(CustomersActions.loadCustomersFailure({ err })))
      )
    )
  )
}, { functional: true });

