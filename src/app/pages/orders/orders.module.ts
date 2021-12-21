import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersViewComponent } from './component/orders.component';

@NgModule({
  declarations: [OrdersViewComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
