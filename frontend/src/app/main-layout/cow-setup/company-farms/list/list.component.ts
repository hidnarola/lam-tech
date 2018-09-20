import { Component, OnInit } from '@angular/core';
import { CowSetupService } from '../../cow-setup.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private coesetupService: CowSetupService, ) { }

  ngOnInit() {
    // this.dtOptions = {
    //   ajax: 'data/data.json',
    //   columns: [{
    //     title: 'ID',
    //     data: 'id'
    //   }, {
    //     title: 'First name',
    //     data: 'firstName'
    //   }, {
    //     title: 'Last name',
    //     data: 'lastName'
    //   }]
    // };
    this.coesetupService.get('company/farm').subscribe((response) => {
    })
  }

}
