import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { CustomersService } from '../../service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers!: Customer[];
  @Output() customerSelected = new EventEmitter();
  @Output() customerDetailsView = new EventEmitter();
  isLoading: boolean = false;

  selectedView: string = 'card';
  searchString = '';
  constructor(private customersevice: CustomersService) {
    this.getCustomers();
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.customers);
    // }, 1000);
  }

  getCustomers() {
    this.isLoading = true;
    this.customersevice.getCustomers().subscribe((res: any) => {
      this.isLoading = false;
      this.customers = res.customers;
    });
  }

  selectView(view: string) {
    this.selectedView = view;
  }

  search(event: string) {
    this.isLoading = true;
    this.customersevice.getCustomers().subscribe((res: any) => {
      this.isLoading = false;
      this.customers = res.customers.filter(
        (res: Customer) =>
          res.name.firstName.includes(event) ||
          res.name.lastName.includes(event)
      );
    });
  }
}
