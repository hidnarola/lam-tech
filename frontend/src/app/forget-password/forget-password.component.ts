import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userdata : any = {};
  forget_form : FormGroup;
  forget_form_validation : boolean = false;
  constructor(
    private ForgetPasswordService : ForgetPasswordService,
    private fb: FormBuilder
  ) {
      this.forget_form = this.fb.group({
        email : ['', [Validators.required, Validators.email]]
      });
   }

  ngOnInit() {
  }

  forgetPassword(flag : boolean) {
    this.forget_form_validation = !flag;
  }
}
