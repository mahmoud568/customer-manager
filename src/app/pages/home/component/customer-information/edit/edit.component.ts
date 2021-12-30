import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/interfaces/customer';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() customer!: Customer;
  @Output() CancelEditing = new EventEmitter();
  isLoading!: boolean;

  constructor(
    private customersService: CustomersService,
    private toastr: ToastrService,
    private sharedService: SharedService
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
      this.toastr.error(
        'you need to change customer data to submit!',
        'warning!'
      );
      return;
    } else {
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
          if (res.status === 'success') {
            this.toastr.success(res.details, res.status);
            this.CancelEditing.emit();
          }
        });
    }
  }

  onDelete() {
    this.customersService
      .deleteCutomerByID(this.customer.id)
      .subscribe((res: any) => {
        this.toastr.success(res.details, res.status);
        this.redirectTo('/Home');
      });
  }

  redirectTo(uri: string) {
    this.sharedService.redirectTo(uri);
  }
}
