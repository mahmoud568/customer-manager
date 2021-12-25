import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeRoute: boolean;
  constructor(private location: Location) {
    this.activeRoute = this.location.path().includes('/customer-information');
    console.log(this.activeRoute);
  }

  ngOnInit(): void {}

  // toggle
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen == true) {
      document.getElementById('mySidenav')!.style.width = '100%';
    } else {
      document.getElementById('mySidenav')!.style.width = '0';
    }
  }
}
