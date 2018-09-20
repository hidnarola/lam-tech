import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private MessageService : MessageService) { }

  ngOnInit() {
  }

  // Go to specific div
  gotoDiv(id) {
    this.MessageService.sendMessage({id : id, type : "scroll"});
  }

}
