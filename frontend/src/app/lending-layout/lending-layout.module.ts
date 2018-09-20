import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { LendingLayoutRoutingModule } from './lending-layout-routing.module';
import { HomeModule } from './home/home.module';
import { LendingLayoutComponent } from './lending-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../shared/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    LendingLayoutRoutingModule,
    HttpClientModule,
    HomeModule,
    ModalModule.forRoot()
  ],
  declarations: [LendingLayoutComponent, HeaderComponent, FooterComponent],
  providers : [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ]
})
export class LendingLayoutModule { }
