import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { LendingLayoutRoutingModule } from './lending-layout-routing.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { FinanceSolutionsModule } from './finance-solutions/finance-solutions.module';
import { HowItWorksModule } from './how-it-works/how-it-works.module';
import { CountriesModule } from './countries/countries.module';
import { LendingLayoutComponent } from './lending-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LendingLayoutRoutingModule,
    HomeModule,
    AboutUsModule,
    FinanceSolutionsModule,
    HowItWorksModule,
    CountriesModule,
    ModalModule.forRoot()
  ],
  declarations: [LendingLayoutComponent, HeaderComponent, FooterComponent]
})
export class LendingLayoutModule { }
