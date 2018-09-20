import { Component, OnInit } from '@angular/core';
import { CompanySetupService } from '../cow-setup.service'; 
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  show_spinner : boolean = false;
  companydata : any = {};
  company_form: FormGroup;
  company_form_validation: boolean = false;
  country_list : any = [];
  constructor(
    private CompanySetupService : CompanySetupService,
    private toastr : ToastrService,
    private fb: FormBuilder
  ) { 
    this.company_form = this.fb.group({
      reg_no : ['', [Validators.required, this.noWhitespaceValidator]],
      name : ['', [Validators.required, this.noWhitespaceValidator]],
      address : [],
      state : ['', [Validators.required, this.noWhitespaceValidator]],
      country : ['', [Validators.required]],
      phno : ['', [Validators.required, this.noWhitespaceValidator]],
      email : ['', [Validators.required, Validators.email]]
    });
    this.CompanySetupService.getAllCountry().subscribe((response) => {
      this.country_list = response['data'];
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

  save(flag : boolean) {
    if(flag) {

    }
    this.company_form_validation = !flag;
  }
}
