import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata : any = {};
  login_form : FormGroup;
  login_form_validation : boolean = false;
  constructor(
    private fb: FormBuilder,
    private LoginService : LoginService
  ) {
    this.login_form = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  login(flag : boolean) {
    this.login_form_validation = !flag;
    this.LoginService.signin(this.userdata).subscribe((response) => {
      this.userdata = {};
    });
  }
}
