import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MessageService } from '../../shared/message.service';
@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  current_url = '';
  constructor(private location: Location,
    private messageService: MessageService) {
    this.current_url = this.location.path();
    this.messageService.current_location.subscribe((data) => {
      if (data) {
        this.current_url = data;
      }
    });
  }

  ngOnInit() {

  }

}
