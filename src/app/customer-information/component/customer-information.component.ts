import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerInformationService } from '../service/customer-information.service';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
})
export class CustomerInformationComponent implements OnInit {
  selectedView: string = 'details';
  customer: any;
  constructor(
    private route: ActivatedRoute,
    private customerInformationService: CustomerInformationService
  ) {
    this.getCustomers();
  }

  ngOnInit(): void {}

  getCustomers() {
    const CustomerID = this.route.snapshot.params.id;
    this.customerInformationService
      .getCustomerByID(CustomerID)
      .subscribe((res: any) => {
        this.customer = res.customer;
        // console.log(this.customer);
      });
  }

  selectView(view: string) {
    this.selectedView = view;
  }
}
