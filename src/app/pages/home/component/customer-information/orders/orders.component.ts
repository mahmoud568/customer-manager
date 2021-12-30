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
  isLoading!: boolean;
  customerFullName!: string;

  constructor(private curtomersService: CustomersService) {}

  ngOnInit(): void {
    this.getCustomerOrdersByID(this.customer.id);
  }

  getCustomerOrdersByID(id: number) {
    this.isLoading = true;
    this.customerFullName = `${this.customer.name.firstName} ${this.customer.name.lastName}`;
    this.curtomersService.getCustomerOrdersByID(id).subscribe((res: any) => {
      this.isLoading = false;
      this.orders = res.orders;
    });
  }
}
