import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: any;
  selectedView: string = 'card';
  constructor(private service: CustomersService) {
    this.getCustomers();
    // setTimeout(() => {
    //   console.log(this.customers);
    // }, 500);
  }

  ngOnInit(): void {}
  getCustomers() {
    this.service
      .getCustomers()
      .subscribe((res: any) => (this.customers = res.cutomers));
  }

  selectView(view: string) {
    this.selectedView = view;
  }
}
