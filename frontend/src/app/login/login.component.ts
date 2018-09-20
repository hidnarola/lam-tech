import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_spinner : boolean = false;
  userdata: any = {};
  login_form: FormGroup;
  login_form_validation: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private LoginService: LoginService,
    private toastr: ToastrService
  ) {
    this.login_form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // this.toastr.success('Hello world!', 'Toastr fun!');

  }

  login(flag: boolean) {
    this.login_form_validation = !flag;
    this.show_spinner = true;
    this.LoginService.signin(this.userdata).subscribe((response) => {
      this.userdata = {};
      var message = "";
      // console.log(response, response['status']);
      if (response) {
        if (response['status']) {
          this.userdata = {
            data: response['data'],
            refresh_token: response['refresh_token'],
            token: response['token'],
          };
          localStorage.setItem('user', JSON.stringify(this.userdata));
          this.toastr.success('', 'Login Successfully done!', { timeOut: 3000 });
          this.router.navigate(['/overview']);
        } else {
          message = "Something went wrong, Please try again later!";
          this.toastr.error(message, 'Error!', { timeOut: 3000 });
        }
      } else {
        message = "Something went wrong, Please try again later!";
        this.toastr.error(message, 'Error!', { timeOut: 3000 });
      }
    }, (err) => {
      if (err.status == 400) {
        var message = "Something went wrong, Please try again later!";
        if (err.error.message) {
          message = err.error.message;
          this.toastr.error(message, 'Error!', { timeOut: 3000 });
        }
        this.show_spinner = false;
      }
      // console.log(err.status,err.error.message);
    }, () => {
      this.show_spinner = false;
    });
  }
}
