import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getUrl() {
    return `${BASE_URL}`;
  }
}
