import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';
import { OverviewModule } from './overview/overview.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { DataTablesModule } from 'angular-datatables';

// load service
import { MessageService } from './shared/message.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LendingLayoutModule,
    MainLayoutModule,
    LoginModule,
    RegisterModule,
    ForgetPasswordModule,
    OverviewModule,
    DataTablesModule,
    RouterModule.forRoot([])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
