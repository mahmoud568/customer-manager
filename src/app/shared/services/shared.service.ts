import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// const BASE_URL = 'http://localhost:3000/';
const BASE_URL = 'https://customer-manager-server-86202.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isLogedin: boolean = false;
  constructor(private router: Router) {}
  getBaseUrl() {
    return `${BASE_URL}`;
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  login(statues: boolean) {
    this.isLogedin = statues;
  }
}
