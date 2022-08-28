import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './component/customers/customers.component';
import { CardViewComponent } from './component/customers/card-view/card-view.component';
import { ListViewComponent } from './component/customers/list-view/list-view.component';
import { MapViewComponent } from './component/customers/map-view/map-view.component';
import { NewCustomerComponent } from './component/customers/new-customer/new-customer.component';
import { HomeComponent } from './component/home.component';
import { CustomerInformationComponent } from './component/customer-information/customer-information.component';
import { DetailsComponent } from './component/customer-information/details/details.component';
import { OrdersComponent } from './component/customer-information/orders/orders.component';
import { EditComponent } from './component/customer-information/edit/edit.component';

import { HomeRoutingModule } from './home-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment.prod';
import { ToastrModule } from 'ngx-toastr';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CustomersComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
    HomeComponent,
    CustomerInformationComponent,
    DetailsComponent,
    OrdersComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    HttpClientModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: [],
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
})
export class HomeModule {}
