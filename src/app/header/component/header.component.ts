import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

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
