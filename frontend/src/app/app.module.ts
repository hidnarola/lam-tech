import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { OverviewModule } from './overview/overview.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';

// load service
import { MessageService } from './shared/message.service';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LendingLayoutModule,
    MainLayoutModule,
    LoginModule,
    RegisterModule,
    ForgetPasswordModule,
    ResetPasswordModule,
    OverviewModule,
    DataTablesModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot({preventDuplicates: true})
  ],
  providers: [MessageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
