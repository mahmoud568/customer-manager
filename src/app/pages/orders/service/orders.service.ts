import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  BASE_URL!: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = sharedService.getBaseUrl();
  }

  getOrders() {
    return this.http.get(`${this.BASE_URL}orders`);
  }
}
