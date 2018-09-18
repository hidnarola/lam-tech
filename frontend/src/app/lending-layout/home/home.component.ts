import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../shared/message.service';

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
  constructor(
    private modalService: BsModalService, 
    private MessageService : MessageService,
    private fb: FormBuilder
  ) { 
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['type'] == 'scroll') {
          this.scroll(response['id']);
      }
    });
    this.getting_started = this.fb.group({
      fname : ['', [Validators.required]],
      lname : ['', [Validators.required]],
      company_name : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      enquiring_about : ['', [Validators.required]],
      finance_solution : ['', [Validators.required]],
      current_sale : ['', [Validators.required]],
      sale_ambition : ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Open Getting start modal
  openGettingStartedModal(template) {
    this.getStartModalRef = this.modalService.show(template, {class : 'get-started-popup'});
  }
  // Scroll to div
  scroll(el) {
    let ele = document.getElementById(el);
      ele.scrollIntoView({
        behavior: 'smooth' 
      });
  }
}
