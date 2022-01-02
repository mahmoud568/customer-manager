import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.toastr.error(
      'login page not available for now please check agan later',
      'sorry!'
    );
    this.sharedService.redirectTo('/Home');
  }
}
