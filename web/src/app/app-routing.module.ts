import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
    {path: '', redirectTo: '/customer', pathMatch: 'full'},
    {path: 'detail/:id', component: CustomerDetailsComponent},
    {path: 'customer', component: CustomersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
