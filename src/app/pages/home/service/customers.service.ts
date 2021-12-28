import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get('http://localhost:3000/customers');
  }

  getCustomerOrdersByID(customerID: number) {
    return this.http.get(
      `http://localhost:3000/customer-orders?id=${customerID}`
    );
  }

  editCutomerByID(customerID: number, editedCustomer: Customer) {
    return this.http.post(
      `http://localhost:3000/edit-customer?id=${customerID}`,
      {
        customer: JSON.stringify(editedCustomer),
      }
    );
  }
}
