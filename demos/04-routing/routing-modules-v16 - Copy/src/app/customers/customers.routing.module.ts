import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './component/customer-list/customers.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CustomersRoutingModule { }
