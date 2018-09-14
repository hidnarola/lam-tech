import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
