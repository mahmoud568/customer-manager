import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardViewComponent } from './customers/component/card-view/card-view.component';
import { CustomersComponent } from './customers/component/customers.component';
import { ListViewComponent } from './customers/component/list-view/list-view.component';
import { MapViewComponent } from './customers/component/map-view/map-view.component';
import { NewCustomerComponent } from './customers/component/new-customer/new-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/Customers', pathMatch: 'full' },
  { path: 'Customers', component: CustomersComponent },
  {
    path: 'customer-information/:id',
    loadChildren: () =>
      import('./customer-information/customer-information.module').then(
        (m) => m.CustomerInformationModule
      ),
  },
  {
    path: 'Orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'About',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
