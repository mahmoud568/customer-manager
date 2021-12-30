import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersViewComponent implements OnInit {
  orders!: Order[];
  isLoading!: boolean;
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ordersService.getOrders().subscribe((res: any) => {
      this.isLoading = false;
      this.orders = res.orders;
    });
  }
}
