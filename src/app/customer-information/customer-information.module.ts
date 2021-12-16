import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInformationRoutingModule } from './customer-information-routing.module';
import { CustomerInformationComponent } from './component/customer-information.component';
import { DetailsComponent } from './component/details/details.component';
import { OrdersComponent } from './component/orders/orders.component';
import { EditComponent } from './component/edit/edit.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    CustomerInformationComponent,
    DetailsComponent,
    OrdersComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    CustomerInformationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: [],
    }),
  ],
})
export class CustomerInformationModule {}
