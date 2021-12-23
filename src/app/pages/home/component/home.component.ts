import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  home: boolean = true;
  selectedCustomer: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  customerSelected(event: any) {
    this.selectedCustomer = event;
    this.home = false;
  }
}
