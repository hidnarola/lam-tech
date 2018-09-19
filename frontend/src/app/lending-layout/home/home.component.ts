import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../shared/message.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  getStartModalRef : BsModalRef;
  subscription: Subscription;
  // Getting started form validation
  getting_started : FormGroup;
  getting_started_validation : boolean = false;
  country_list : any = [];
  userdata : any = {};
  constructor(
    private modalService: BsModalService, 
    private MessageService : MessageService,
    private fb: FormBuilder,
    private HomeService : HomeService
  ) { 
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['type'] == 'scroll') {
          this.scroll(response['id']);
      }
    });
    this.getting_started = this.fb.group({
      fname : ['', [Validators.required, this.noWhitespaceValidator]],
      lname : ['', [Validators.required, this.noWhitespaceValidator]],
      company_name : ['', [Validators.required, this.noWhitespaceValidator]],
      email : ['', [Validators.required, Validators.email]],
      enquiring_about : ['', [Validators.required]],
      finance_solution : ['', [Validators.required]],
      current_sale : ['', [Validators.required]],
      sale_ambition : ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getAllCountry();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  noWhitespaceValidator(control: FormControl) {
      if(typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
      }
  }
  // Open Getting start modal
  openGettingStartedModal(template) {
    this.userdata = {};
    this.getting_started_validation = false;
    this.getStartModalRef = this.modalService.show(template, {class : 'get-started-popup', backdrop : true});
  }
  // Scroll to div
  scroll(el) {
    let ele = document.getElementById(el);
      ele.scrollIntoView({
        behavior: 'smooth' 
      });
  }

  // manage getting started
  addGettingStarted(flag) {
    if(flag) {
      this.HomeService.addUserInterest(this.userdata).subscribe((response) => {
        this.getStartModalRef.hide();
      });
    }
    this.getting_started_validation = !flag;
  }

  // Get all country
  getAllCountry() {
    this.HomeService.getAllCountry().subscribe((response) => {
      this.country_list = response['data'];
      console.log(this.country_list);
    });
  }
}
