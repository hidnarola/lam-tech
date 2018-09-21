import { Component, OnInit } from '@angular/core';
import { CowSetupService } from '../../cow-setup.service'; 
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  show_spinner : boolean = false;
  companyfarmdata : any = {};
  companyfarm_form: FormGroup;
  companyfarm_form_validation: boolean = false;
  region_list : any = [];
  constructor(
    private CowSetupService : CowSetupService,
    private toastr : ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.companyfarm_form = this.fb.group({
      code : ['', [Validators.required, this.noWhitespaceValidator]],
      name : ['', [Validators.required, this.noWhitespaceValidator]],
      address : [],
      state : ['', [Validators.required, this.noWhitespaceValidator]],
      country : ['', [Validators.required, this.noWhitespaceValidator]],
      region : ['', [Validators.required]]
    });
    this.CowSetupService.getAllRegion().subscribe((response) => {
      this.region_list = response['data'];
    });
  }

  noWhitespaceValidator(control: FormControl) {
    if (typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
      let isWhitespace = (control.value || '').trim().length === 0;
      let isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true }
    }
  }

  ngOnInit() {
  }

  addFarm(flag : boolean) {
    if(flag) {
      this.show_spinner = true;
      this.CowSetupService.addNewFarm(this.companyfarmdata).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!', { timeOut: 3000 });
        this.router.navigate(['/dashboard/cow_setup/company_farms']);
      }, (error) => {
        if(error['error']['message']) {
          this.toastr.error(error['error']['message'], 'Success!', { timeOut: 3000 });
        }
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
    this.companyfarm_form_validation = !flag;
  }
}
