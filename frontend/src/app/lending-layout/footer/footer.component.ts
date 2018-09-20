import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private MessageService : MessageService) { }

  ngOnInit() {
  }

  // Go to specific div
  gotoDiv(id) {
    this.MessageService.sendMessage({id : id, type : "scroll"});
  }

}
