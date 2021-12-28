import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() customer!: Customer;
  @Output() CancelEditing = new EventEmitter();
  response!: string;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {}

  onUpdate(f: NgForm) {
    this.isLoading = true;
    let editedCustomer = this.customer;

    if (
      editedCustomer.address.streetAddress == f.value.address &&
      editedCustomer.address.cityName == f.value.city &&
      editedCustomer.address.state == f.value.state &&
      editedCustomer.name.firstName == f.value.firstName &&
      editedCustomer.name.lastName == f.value.lastName &&
      editedCustomer.email == f.value.email &&
      editedCustomer.gender == (f.value.gender == 1 ? 'male' : 'female')
    ) {
      this.isLoading = false;
      return console.log('u need to do changes to submit');
    } else {
      console.log(f);
      editedCustomer.address.streetAddress = f.value.address;
      editedCustomer.address.cityName = f.value.city;
      editedCustomer.address.state = f.value.state;
      editedCustomer.name.firstName = f.value.firstName;
      editedCustomer.name.lastName = f.value.lastName;
      editedCustomer.email = f.value.email;
      editedCustomer.gender = f.value.gender == 1 ? 'male' : 'female';
      this.customersService
        .editCutomerByID(editedCustomer.id, editedCustomer)
        .subscribe((res: any) => {
          this.isLoading = false;
          this.response = res.status;
          console.log(this.response);
        });
      // this.CancelEditing.emit();
    }
  }

  onDelete() {
    console.log('delete');
  }
}
