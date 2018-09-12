import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getStartModalRef : BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  // Open Getting start modal
  openGettingStartedModal(template) {
    this.getStartModalRef = this.modalService.show(template);
  }
}
