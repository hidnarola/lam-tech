import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { LendingLayoutRoutingModule } from './main-layout-routing.module';
import { CowSetupComponent } from './cow-setup/cow-setup.component';
import { CompanyDetailsComponent } from './cow-setup/company-details/company-details.component';
import { CompanyFarmsComponent } from './cow-setup/company-farms/company-farms.component';
import { ContractFarmsComponent } from './cow-setup/contract-farms/contract-farms.component';
import { CustomersComponent } from './cow-setup/customers/customers.component';
import { LivestockAgentsComponent } from './cow-setup/livestock-agents/livestock-agents.component';
import { FreightCompaniesComponent } from './cow-setup/freight-companies/freight-companies.component';
import { ListComponent } from './cow-setup/company-farms/list/list.component';
import { AddComponent } from './cow-setup/company-farms/add/add.component';
import { ContractListComponent } from './cow-setup/contract-farms/list/list.component';
import { ContractAddComponent } from './cow-setup/contract-farms/add/add.component';
import { CustomerListComponent } from './cow-setup/customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './cow-setup/customers/customer-add/customer-add.component';
import { FreightListComponent } from './cow-setup/freight-companies/freight-list/freight-list.component';
import { FreightAddComponent } from './cow-setup/freight-companies/freight-add/freight-add.component';

@NgModule({
  imports: [
    CommonModule,
    LendingLayoutRoutingModule
  ],
  declarations: [
    MainLayoutComponent, 
    HeaderComponent, 
    SiderbarComponent, 
    CowSetupComponent,
    CompanyDetailsComponent,
    CompanyFarmsComponent,
    ContractFarmsComponent,
    CustomersComponent,
    LivestockAgentsComponent,
    FreightCompaniesComponent,
    ListComponent,
    AddComponent,
    ContractListComponent,
    ContractAddComponent,
    CustomerListComponent,
    CustomerAddComponent,
    FreightListComponent,
    FreightAddComponent
  ]
})
export class MainLayoutModule { }