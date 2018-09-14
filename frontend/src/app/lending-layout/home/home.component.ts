import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(private modalService: BsModalService, private MessageService : MessageService) { 
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['type'] == 'scroll') {
          this.scroll(response['id']);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Open Getting start modal
  openGettingStartedModal(template) {
    this.getStartModalRef = this.modalService.show(template);
  }
  // Scroll to div
  scroll(el) {
    let ele = document.getElementById(el);
      ele.scrollIntoView();
  }
}
