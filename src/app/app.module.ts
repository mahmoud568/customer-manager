import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/component/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/component/home.component';
import { CustomersComponent } from './home/component/customers/customers.component';
import { CardViewComponent } from './home/component/customers/card-view/card-view.component';
import { ListViewComponent } from './home/component/customers/list-view/list-view.component';
import { MapViewComponent } from './home/component/customers/map-view/map-view.component';
import { NewCustomerComponent } from './home/component/customers/new-customer/new-customer.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment.prod';
import { CustomerInformationComponent } from './home/component/customer-information/customer-information.component';
import { DetailsComponent } from './home/component/customer-information/details/details.component';
import { EditComponent } from './home/component/customer-information/edit/edit.component';
import { OrdersComponent } from './home/component/customer-information/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
    HomeComponent,
    CustomerInformationComponent,
    DetailsComponent,
    OrdersComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: [],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
