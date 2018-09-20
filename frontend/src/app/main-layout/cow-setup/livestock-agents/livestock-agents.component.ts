import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-livestock-agents',
  templateUrl: './livestock-agents.component.html',
  styleUrls: ['./livestock-agents.component.css']
})
export class LivestockAgentsComponent implements OnInit {
  inviteAgentModalRef : BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  // Open Getting start modal
  openAddAgentModal(template) {
    this.inviteAgentModalRef = this.modalService.show(template, {class : 'invite-agent-popup-wrap', backdrop : true});
  }
}
