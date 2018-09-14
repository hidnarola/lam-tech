import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HomeLayoutModule } from './home-layout/home-layout.module';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';
import { OverviewModule } from './overview/overview.module';
import { MainLayoutModule } from './main-layout/main-layout.module';

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
    RouterModule.forRoot([])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
