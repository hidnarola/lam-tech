import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cow-bank',
  templateUrl: './cow-bank.component.html',
  styleUrls: ['./cow-bank.component.css']
})
export class CowBankComponent implements OnInit {

  constructor() {
    console.log('cow bank is running');
   }

  ngOnInit() {
  }

}
