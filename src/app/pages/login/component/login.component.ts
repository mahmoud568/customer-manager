import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {
    let admin = localStorage.getItem('admin');
    if (admin) {
      this.sharedService.redirectTo('/Home');
    }
  }

  ngOnInit(): void {}

  onLogin(f: NgForm) {
    localStorage.removeItem('admin');
    this.loginService
      .login(f.value.userName, f.value.password)
      .subscribe((res: any) => {
        let admin = res.admin;
        if (res.status == 'success') {
          if (f.value.rememberMe === true) {
            delete admin.password;
            delete admin.userName;
            localStorage.setItem('admin', JSON.stringify(admin));
          }
          this.toastr.success(`welcome ${admin.adminName}`);
          this.sharedService.redirectTo('Home');
          this.sharedService.login(true);
        } else {
          this.toastr.error(`something wrong happen please contact it`);
          this.sharedService.login(false);
        }
      });
  }

  forgetPassword() {
    this.toastr.error(`user name is 'admin', password is '12345'`);
  }
}
