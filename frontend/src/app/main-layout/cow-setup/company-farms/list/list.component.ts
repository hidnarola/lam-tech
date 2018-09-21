import { Component, OnInit, Renderer } from '@angular/core';
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
  remove_farms;
  checkall = false;
  constructor(
    public renderer: Renderer,
    private cowsetupService: CowSetupService) { }

  ngOnInit() {
    const that = this;
    // this.cowsetupService.get('company/farm').subscribe((data) => {
    //   console.log(data);
    // });
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: false,
      ordering: true,
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          this.cowsetupService.get_by_post('company/farm/get', dataTablesParameters).subscribe((res) => {
            if (res['status']) {
              this.cowfarms = res['data'];
              // console.log(this.cowfarms);
              callback({
                recordsTotal: res['recordsTotal'],
                recordsFiltered: res['recordsTotal'],
                data: []
              });
            }
          })
        }, 1000);
      },
      columnDefs: [
        { orderable: false, "targets": 0 }
      ],
      columns: [
        { data: "#" },
        { data: 'PROPERTY ID CODE' },
        { data: 'FARM NAME' },
        { data: 'ADDRESS' },
        { data: 'STATE' },
        { data: 'COUNTRY' },
        { data: 'ZIP' }
      ]
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();

  }
  selectAll(event) {
    this.checkall = event.target.checked;
    // let checkone_all = document.querySelectorAll(".checkone");
    // if (checkone_all) {
    //   for (var i = 0; i < checkone_all.length; i++) {
    //     checkone_all[i]['checked'] = event.target.checked;
    //     // deleteUser(userItem);
    //   };

    // }
  }
  removeRow(id, event) {
    // console.log(id);
    // console.log(event.targets.checked);
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
