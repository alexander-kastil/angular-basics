import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CustomersRoutingModule } from './customers.routing.module';
import * as customerEffects from './state/customers.effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './component/customer-list/customers.component';
import { customersState } from './state/customers.state';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    StoreModule.forFeature(customersState),
    EffectsModule.forFeature([customerEffects]),
  ]
})
export class CustomersModule { }
