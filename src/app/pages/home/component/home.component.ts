import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  home: boolean = true;
  selectedCustomer!: Customer;
  customerDetailsView: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  customerSelected(event: Customer) {
    this.selectedCustomer = event;
    this.home = false;
  }
}
