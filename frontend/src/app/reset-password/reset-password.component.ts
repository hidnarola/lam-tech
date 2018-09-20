import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userdata : any = {};
  reset_form : FormGroup;
  reset_form_validation : boolean = false;
  show_spinner : boolean = false;
  param : any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ResetPasswordService: ResetPasswordService,
    private toastr: ToastrService,
  ) { 
    this.reset_form = this.fb.group({
      password : ['', [Validators.required, Validators.minLength(6)]],
      conf : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator : this.passwordMatchValidator
    });
    this.route.params.subscribe(res =>  {
      this.param = res;
       console.log(res.id, res.type);
    });
  }

  passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('conf').value ? null : g.get('conf').setErrors({'mismatch': true});
  }
  ngOnInit() {
  }

  reset(flag : boolean) {
    if(flag) {
      let data = {
        token : this.param.token,
        password : this.userdata.password
      };
      this.show_spinner = true;
      this.ResetPasswordService.resetPassword(data).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!', { timeOut: 3000 });
        this.router.navigate(['/login']);
      }, (error) => {
        if(error['error'].message) {
          this.toastr.error(error['error'].message, 'Error!', { timeOut: 3000 });
        }
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
    this.reset_form_validation = !flag;
  }
}
