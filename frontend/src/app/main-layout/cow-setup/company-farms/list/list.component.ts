import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CowSetupService } from '../../cow-setup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  cowfarms;
  constructor(private cowsetupService: CowSetupService, ) { }

  ngOnInit() {
    const that = this;
    // this.cowsetupService.get('company/farm').subscribe((data) => {
    //   console.log(data);
    // });
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ordering: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.cowsetupService.get('company/farm').subscribe((res) => {
          if (res['status']) {
            this.cowfarms = res['data'];
            callback({
              recordsTotal: res['recordsTotal'],
              recordsFiltered: res['recordsTotal'],
              data: []
            });
          }
        });
      },
      columns: [
        {
          data:'',
          // title: '<div class="checkbox">'
          //   + '<input id="check11" type="checkbox" name="check" value="check11">'
          //   + '<label for="check11"></label>'
          //   + '</div>',
          // render: function (data: any, type: any, full: any) {
          //   return '<div class="checkbox">'
          //     + '<input id="check12" type="checkbox" name="check" value="check12">'
          //     + '<label for="check12"></label>'
          //     + '</div>';
          // }
        },
        {
          data: 'property_id',
          render: function (data: any, type: any, full: any) {
            return '<span class="green-text-bold">' + data + '</span>';
          }
        },
        { data: 'property_name' },
        { data: 'address' },
        { data: 'state' },
        { data: 'country' },
        {
          render: function (data: any, type: any, full: any) {
            return '-';
          }
        },
      ]
    };
  }

  render(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
