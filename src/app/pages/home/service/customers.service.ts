import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
