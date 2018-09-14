import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { CowSetupComponent } from './cow-setup/cow-setup.component';
import { CompanyDetailsComponent } from './cow-setup/company-details/company-details.component';
import { CompanyFarmsComponent } from './cow-setup/company-farms/company-farms.component';
import { ListComponent } from './cow-setup/company-farms/list/list.component';
import { AddComponent } from './cow-setup/company-farms/add/add.component';
import { ContractFarmsComponent } from './cow-setup/contract-farms/contract-farms.component';
import { ContractListComponent } from './cow-setup/contract-farms/list/list.component';
import { ContractAddComponent } from './cow-setup/contract-farms/add/add.component';
import { CustomersComponent } from './cow-setup/customers/customers.component';
import { CustomerListComponent } from './cow-setup/customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './cow-setup/customers/customer-add/customer-add.component';
import { LivestockAgentsComponent } from './cow-setup/livestock-agents/livestock-agents.component';
import { FreightCompaniesComponent } from './cow-setup/freight-companies/freight-companies.component';
import { FreightListComponent } from './cow-setup/freight-companies/freight-list/freight-list.component';
import { FreightAddComponent } from './cow-setup/freight-companies/freight-add/freight-add.component';
import { fromPromise } from 'rxjs/observable/fromPromise';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: MainLayoutComponent,
                children: [
                    {
                        path : 'cow_setup', component : CowSetupComponent,
                        children : [
                            {path : '', component : CompanyDetailsComponent},
                            {
                                path : 'company_farms', component : CompanyFarmsComponent,
                                children : [
                                    {path : '', component : ContractListComponent},     
                                    {path : 'add', component : ContractAddComponent}     
                                ]
                            },
                            {
                                path : 'contract_farms', component : ContractFarmsComponent,
                                children : [
                                    {path : '', component : ListComponent},     
                                    {path : 'add', component : AddComponent}     
                                ]
                                
                            },
                            {
                                path : 'customers', component : CustomersComponent,
                                children : [
                                    {path : '', component : CustomerListComponent},     
                                    {path : 'add', component : CustomerAddComponent}
                                ]
                            },
                            {path : 'livestock_agents', component : LivestockAgentsComponent},
                            {
                                path : 'freight_companies', component : FreightCompaniesComponent,
                                children : [
                                    {path : '', component : FreightListComponent},     
                                    {path : 'add', component : FreightAddComponent}
                                ]
                            }
                        ]
                    }
                ]
            },
            { path: '**', redirectTo: 'cow_setup', pathMatch: 'full' },
        ])
    ],
    exports: [RouterModule]
})
export class LendingLayoutRoutingModule { }