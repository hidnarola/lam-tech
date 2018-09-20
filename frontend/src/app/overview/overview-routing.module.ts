import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';
//Auth services
import { AuthService } from './../shared/auth.service';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'overview', component: OverviewComponent , canActivate: [AuthService],}
    ])
  ],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
