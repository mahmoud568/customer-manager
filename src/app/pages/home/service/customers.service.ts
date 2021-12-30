import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  BASE_URL!: string;
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = sharedService.getBaseUrl();
  }

  getCustomers() {
    return this.http.get(`${this.BASE_URL}customers`);
  }

  getCustomerOrdersByID(customerID: number) {
    return this.http.get(`${this.BASE_URL}customer-orders?id=${customerID}`);
  }

  editCutomerByID(customerID: number, editedCustomer: Customer) {
    return this.http.post(`${this.BASE_URL}edit-customer?id=${customerID}`, {
      customer: JSON.stringify(editedCustomer),
    });
  }

  deleteCutomerByID(customerID: number) {
    return this.http.delete(`${this.BASE_URL}delete-customer?id=${customerID}`);
  }

  addCustomer(editedCustomer: Customer) {
    return this.http.post(`${this.BASE_URL}add-customer`, {
      customer: JSON.stringify(editedCustomer),
    });
  }
}
