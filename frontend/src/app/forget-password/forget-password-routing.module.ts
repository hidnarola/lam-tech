import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'forget-password', component: ForgetPasswordComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
