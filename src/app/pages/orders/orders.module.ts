import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersViewComponent } from './component/orders.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OrdersViewComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
