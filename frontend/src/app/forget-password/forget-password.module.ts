import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password.component';
import { ForgetPasswordRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
