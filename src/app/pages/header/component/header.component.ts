import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private loction: Location) {}

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
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/Orders', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  // refresh if user click on current route
  // move to any route and move back in same time to refresh
  refresh(uri: string) {
    const activeRoute = decodeURI(this.loction.path());
    if (activeRoute === uri) this.redirectTo('/Home');
  }
}
