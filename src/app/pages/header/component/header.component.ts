import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loction: Location,
    private sharedService: SharedService
  ) {}

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
    this.sharedService.redirectTo(uri);
  }
  // refresh if user click on current route
  // move to fake empty route and move back in same time to refresh
  // created for the routes that calls data from backend
  refresh(uri: string) {
    const activeRoute = decodeURI(this.loction.path());
    if (activeRoute === uri) this.redirectTo(uri);
  }
}
