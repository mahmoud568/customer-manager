import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/component/customers.component';
import { HeaderComponent } from './header/component/header.component';
import { CardViewComponent } from './customers/component/card-view/card-view.component';
import { ListViewComponent } from './customers/component/list-view/list-view.component';
import { MapViewComponent } from './customers/component/map-view/map-view.component';
import { NewCustomerComponent } from './customers/component/new-customer/new-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
