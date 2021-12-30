import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment.prod';

import { HeaderComponent } from './pages/header/component/header.component';
import { CustomersComponent } from './pages/home/component/customers/customers.component';
import { CardViewComponent } from './pages/home/component/customers/card-view/card-view.component';
import { ListViewComponent } from './pages/home/component/customers/list-view/list-view.component';
import { MapViewComponent } from './pages/home/component/customers/map-view/map-view.component';
import { NewCustomerComponent } from './pages/home/component/customers/new-customer/new-customer.component';
import { HomeComponent } from './pages/home/component/home.component';
import { CustomerInformationComponent } from './pages/home/component/customer-information/customer-information.component';
import { DetailsComponent } from './pages/home/component/customer-information/details/details.component';
import { OrdersComponent } from './pages/home/component/customer-information/orders/orders.component';
import { EditComponent } from './pages/home/component/customer-information/edit/edit.component';
// import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';

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
    // LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
