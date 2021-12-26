import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Order } from 'src/app/shared/interfaces/order';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() customer!: Customer;
  orders!: Order;

  constructor(private curtomersService: CustomersService) {
    // setTimeout(() => {
    //   this.curtomersService
    //     .getCustomerOrdersByID(this.customer.id)
    //     .subscribe((res) => console.log(res));
    // }, 0);
  }

  ngOnInit(): void {
    this.getCustomerOrdersByID(this.customer.id);
    setTimeout(() => {
      console.log(this.orders);
    }, 0);
  }

  getCustomerOrdersByID(id: number) {
    this.curtomersService
      .getCustomerOrdersByID(id)
      .subscribe((res: any) => (this.orders = res.orders));
  }
}
