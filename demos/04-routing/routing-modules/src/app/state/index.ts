import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CustomersState, customersState } from '../customers/state/customers.state';

export interface State {
  customers: CustomersState;
}

export const reducers: ActionReducerMap<State> = {
  customers: customersState.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
