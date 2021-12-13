import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerInformationService {
  constructor(private http: HttpClient) {}

  getCustomerByID(customerID: number) {
    return this.http.get(
      `http://localhost:3000/customer-information/?userid=${customerID}`
    );
  }
}
