import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddNewCustomer(f: NgForm) {
    console.log(f);
  }

  onDelete() {
    console.log('delete');
  }
  onCancel() {
    console.log('cancel');
  }
}
