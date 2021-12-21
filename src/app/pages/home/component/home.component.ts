import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../service/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  home: boolean = true;
  customers: any;
  selectedCustomer: any;
  constructor(private cutomerSevice: CustomersService) {
    this.getCustomers();
  }

  ngOnInit(): void {}
  getCustomers() {
    this.cutomerSevice
      .getCustomers()
      .subscribe((res: any) => (this.customers = res.cutomers));
  }

  customerSelected(event: any) {
    this.selectedCustomer = event;
    this.home = false;
  }
}
