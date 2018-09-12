import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HomeLayoutModule } from './home-layout/home-layout.module';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LendingLayoutModule,
    LoginModule,
    RegisterModule,
    ForgetPasswordModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
