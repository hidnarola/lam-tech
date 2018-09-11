import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LendingLayoutRoutingModule } from './lending-layout-routing.module';
import { HomeModule } from './home/home.module';
import { LendingLayoutComponent } from './lending-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LendingLayoutRoutingModule,
    HomeModule
  ],
  declarations: [LendingLayoutComponent, HeaderComponent, FooterComponent]
})
export class LendingLayoutModule { }
