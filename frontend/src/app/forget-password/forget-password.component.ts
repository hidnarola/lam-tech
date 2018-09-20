import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ForgetPasswordService } from './forget-password.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  show_spinner : boolean = false;
  userdata : any = {};
  forget_form : FormGroup;
  forget_form_validation : boolean = false;
  constructor(
    private ForgetPasswordService : ForgetPasswordService,
    private fb: FormBuilder,
    private toastr : ToastrService
  ) {
      this.forget_form = this.fb.group({
        email : ['', [Validators.required, Validators.email]]
      });
   }

  ngOnInit() {
    
  }

  forgetPassword(flag : boolean) {
    if(flag) {
      this.show_spinner = true;
      this.ForgetPasswordService.forget(this.userdata).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!', { timeOut: 3000 });
        this.userdata = {};
      }, (error) => {
        console.log(error['error']['message']);
        this.toastr.error(error['error']['message'], 'Error!', { timeOut: 3000 });
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
    this.forget_form_validation = !flag;
  }
}
