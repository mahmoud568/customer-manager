import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  @Output() CancelEditing = new EventEmitter();
  customer: Customer = {
    id: 0,
    name: {
      firstName: '',
      lastName: '',
    },
    gender: '',
    address: {
      streetAddress: '',
      cityName: '',
      state: '',
    },
    location: {
      latitude: 0,
      longitude: 0,
    },
    email: '',
    totalPayment: 0,
  };
  isLoading!: boolean;
  constructor(private customersevice: CustomersService) {}

  ngOnInit(): void {}

  onAddNewCustomer(f: NgForm) {
    this.customer.address.streetAddress = f.value.address;
    this.customer.address.cityName = f.value.city;
    this.customer.address.state = f.value.state;
    this.customer.name.firstName = f.value.firstName;
    this.customer.name.lastName = f.value.lastName;
    this.customer.email = f.value.email;
    this.customer.gender = f.value.gender == 1 ? 'male' : 'female';
    this.customersevice
      .addCustomer(this.customer)
      .subscribe((res) => console.log(res));
  }

  onCancel() {
    console.log('cancel');
  }
}
