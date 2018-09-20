import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
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
import { CowBankComponent } from './cow-bank/cow-bank.component';
import { SalesContractComponent } from './cow-bank/sales-contract/sales-contract.component';
import { SalesListComponent } from './cow-bank/sales-contract/sales-list/sales-list.component';
import { SalesAddComponent } from './cow-bank/sales-contract/sales-add/sales-add.component';
import { CattlePurchaseComponent } from './cow-bank/cattle-purchase/cattle-purchase.component';
import { PurchaseListComponent } from './cow-bank/cattle-purchase/purchase-list/purchase-list.component';
import { PurchaseInstructionComponent } from './cow-bank/cattle-purchase/purchase-instruction/purchase-instruction.component';
import { InternalTransferComponent } from './cow-bank/cattle-purchase/internal-transfer/internal-transfer.component';
import { PurchaseContractComponent } from './cow-bank/cattle-purchase/purchase-contract/purchase-contract.component';
import { CattleReceiptComponent } from './cow-bank/cattle-receipt/cattle-receipt.component';
import { InductionFeedCostComponent } from './cow-bank/induction-feed-cost/induction-feed-cost.component';
import { InductionListComponent } from './cow-bank/induction-feed-cost/induction-list/induction-list.component';
import { InductionSummaryComponent } from './cow-bank/induction-feed-cost/induction-summary/induction-summary.component';
import { CowRecordComponent } from './cow-bank/induction-feed-cost/cow-record/cow-record.component';
import { HospitalisedCattleRecordComponent } from './cow-bank/hospitalised-cattle-record/hospitalised-cattle-record.component';
import { CattleListComponent } from './cow-bank/hospitalised-cattle-record/cattle-list/cattle-list.component';
import { SickAnimalComponent } from './cow-bank/hospitalised-cattle-record/sick-animal/sick-animal.component';
import { CattleDeathRecordComponent } from './cow-bank/cattle-death-record/cattle-death-record.component';
import { CattleDeathListComponent } from './cow-bank/cattle-death-record/cattle-death-list/cattle-death-list.component';
import { DeathRecordComponent } from './cow-bank/cattle-death-record/death-record/death-record.component';
import { CattleDeliveriesComponent } from './cow-bank/cattle-deliveries/cattle-deliveries.component';
import { DeliveryListComponent } from './cow-bank/cattle-deliveries/delivery-list/delivery-list.component';
import { ConsignmentComponent } from './cow-bank/cattle-deliveries/consignment/consignment.component';
import { ReportsComponent } from './cow-bank/reports/reports.component';
import { LivestockPositionComponent } from './cow-bank/reports/livestock-position/livestock-position.component';
import { DocumentReconciliationComponent } from './cow-bank/reports/document-reconciliation/document-reconciliation.component';
import { DocumentByAnimalComponent } from './cow-bank/reports/document-by-animal/document-by-animal.component';

import { 
        BsDropdownModule, 
        ModalModule, 
        AccordionModule,
        BsDatepickerModule  
 } from 'ngx-bootstrap';

import { CowCloudComponent } from './cow-cloud/cow-cloud.component';
import { CowCloudListComponent } from './cow-cloud/cow-cloud-list/cow-cloud-list.component';
import { CowSummaryComponent } from './cow-cloud/cow-summary/cow-summary.component';
import { CowProfileComponent } from './cow-cloud/cow-profile/cow-profile.component';
import { CowPlianceComponent } from './cow-pliance/cow-pliance.component';
import { AnimalWelfareComponent } from './cow-pliance/animal-welfare/animal-welfare.component';
import { EnvironmentalManagementComponent } from './cow-pliance/environmental-management/environmental-management.component';
import { HumanResourcesComponent } from './cow-pliance/human-resources/human-resources.component';
import { FinancialManagementComponent } from './cow-pliance/financial-management/financial-management.component';
import { AgriculturePracticesComponent } from './cow-pliance/agriculture-practices/agriculture-practices.component';
import { BioSecurityComponent } from './cow-pliance/bio-security/bio-security.component';
import { SupplierManagementComponent } from './cow-pliance/supplier-management/supplier-management.component';


@NgModule({
  imports: [
    CommonModule,
    LendingLayoutRoutingModule,
    BsDropdownModule,
    DataTablesModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot()
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
    FreightAddComponent,
    CowBankComponent,
    SalesContractComponent,
    SalesListComponent,
    SalesAddComponent,
    CattlePurchaseComponent,
    PurchaseListComponent,
    PurchaseInstructionComponent,
    InternalTransferComponent,
    PurchaseContractComponent,
    CattleReceiptComponent,
    InductionFeedCostComponent,
    InductionListComponent,
    InductionSummaryComponent,
    CowRecordComponent,
    HospitalisedCattleRecordComponent,
    CattleListComponent,
    SickAnimalComponent,
    CattleDeathRecordComponent,
    CattleDeathListComponent,
    DeathRecordComponent,
    CattleDeliveriesComponent,
    DeliveryListComponent,
    ConsignmentComponent,
    ReportsComponent,
    LivestockPositionComponent,
    DocumentReconciliationComponent,
    DocumentByAnimalComponent,
    CowCloudComponent,
    CowCloudListComponent,
    CowSummaryComponent,
    CowProfileComponent,
    CowPlianceComponent,
    AnimalWelfareComponent,
    EnvironmentalManagementComponent,
    HumanResourcesComponent,
    FinancialManagementComponent,
    AgriculturePracticesComponent,
    BioSecurityComponent,
    SupplierManagementComponent
  ]
})
export class MainLayoutModule { }