import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL!: String;
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.BASE_URL = sharedService.getBaseUrl();
  }

  login(userName: string, password: string) {
    return this.http.post(`${this.BASE_URL}Login`, {
      userName: JSON.stringify(userName),
      password: JSON.stringify(password),
    });
  }
}
