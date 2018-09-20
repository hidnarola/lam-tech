import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
// cow setup start
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
// Cow bank start
import { CowBankComponent } from './cow-bank/cow-bank.component';
import { SalesContractComponent } from './cow-bank/sales-contract/sales-contract.component';
import { SalesListComponent } from './cow-bank/sales-contract/sales-list/sales-list.component';
import { SalesAddComponent } from './cow-bank/sales-contract/sales-add/sales-add.component';
import { CattlePurchaseComponent } from './cow-bank/cattle-purchase/cattle-purchase.component';
import { PurchaseListComponent } from './cow-bank/cattle-purchase/purchase-list/purchase-list.component';
import { InternalTransferComponent } from './cow-bank/cattle-purchase/internal-transfer/internal-transfer.component';
import { PurchaseContractComponent } from './cow-bank/cattle-purchase/purchase-contract/purchase-contract.component';
import { PurchaseInstructionComponent } from './cow-bank/cattle-purchase/purchase-instruction/purchase-instruction.component';
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

// Cow cloud
import { CowCloudComponent } from './cow-cloud/cow-cloud.component';
import { CowCloudListComponent } from './cow-cloud/cow-cloud-list/cow-cloud-list.component';
import { CowSummaryComponent } from './cow-cloud/cow-summary/cow-summary.component';
import { CowProfileComponent } from './cow-cloud/cow-profile/cow-profile.component';

// Cow pliance
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
        RouterModule.forRoot([
            {
                path: 'dashboard', component: MainLayoutComponent,
                children: [
                    {
                        path : 'cow_setup', component : CowSetupComponent,
                        children : [
                            {path : '', component : CompanyDetailsComponent},
                            {path : 'company-details', component : CompanyDetailsComponent},
                            {
                                path : 'company_farms', component : CompanyFarmsComponent,
                                children : [
                                    {path : '', component : ListComponent},     
                                    {path : 'add', component : AddComponent }     
                                ]
                            },
                            {
                                path : 'contract_farms', component : ContractFarmsComponent,
                                children : [
                                    {path : '', component : ContractListComponent },     
                                    {path : 'add', component : ContractAddComponent }     
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
                    },
                    {
                        path : 'cow_bank', component : CowBankComponent,
                        children : [
                            {path : 'sales-contract', component : SalesContractComponent},
                            {
                                path : '', component : SalesContractComponent, 
                                children : [
                                    {path : '', component : SalesListComponent},
                                    {path : 'add', component : SalesAddComponent}
                                ]
                            },
                            {
                                path : 'cattle_purchase', component : CattlePurchaseComponent,
                                children : [
                                    {path : '', component : PurchaseListComponent},
                                    {path : 'purchase_insttruction', component : PurchaseInstructionComponent},
                                    {path : 'internal_transfer', component : InternalTransferComponent},
                                    {path : 'purchase_contract', component : PurchaseContractComponent}
                                ]
                            },
                            {path : 'cattle_receipts', component : CattleReceiptComponent},
                            {
                                path : 'induction_feed_cost', component : InductionFeedCostComponent,
                                children : [
                                    {path : '', component : InductionListComponent},
                                    {path : 'add_induction_summary', component : InductionSummaryComponent},
                                    {path : 'add_cow_record', component : CowRecordComponent}
                                ]
                            },
                            {
                                path : 'hospitalised_cattle_record', component : HospitalisedCattleRecordComponent,
                                children : [
                                    {path : '', component : CattleListComponent},
                                    {path : 'add_sick_animal', component : SickAnimalComponent}
                                ]
                            },
                            {
                                path : 'cattle-death-record', component : CattleDeathRecordComponent,
                                children : [
                                    {path : '', component : CattleDeathListComponent},
                                    {path : 'add-death-record', component : DeathRecordComponent}
                                ]
                            },
                            {
                                path : 'cattle-deliveries', component : CattleDeliveriesComponent,
                                children : [
                                    {path : '', component : DeliveryListComponent},
                                    {path : 'consignment', component : ConsignmentComponent}
                                ]
                            },
                            {
                                path : 'reports', component : ReportsComponent,
                                children : [
                                    {path : '', component : LivestockPositionComponent},
                                    {path : 'document-reconciliation', component : DocumentReconciliationComponent},
                                    {path : 'document-by-animal', component : DocumentByAnimalComponent}

                                ]
                            }
                        ]
                    },
                    {
                        path : 'cow-cloud', component: CowCloudComponent,
                        children : [
                            {path : '', component : CowCloudListComponent},
                            {path : 'cow-summary', component : CowSummaryComponent},
                            {path : 'cow-profile', component : CowProfileComponent}
                        ]
                    },
                    {
                        path : 'cow-pliance', component : CowPlianceComponent,
                        children : [
                            {path : 'animal-welfare', component : AnimalWelfareComponent},
                            {path : 'environmental-management', component :EnvironmentalManagementComponent },
                            {path : 'human-resources', component : HumanResourcesComponent},
                            {path : 'financial-management', component : FinancialManagementComponent},
                            {path : 'agricultural-practices', component : AgriculturePracticesComponent},
                            {path : 'bio-security', component : BioSecurityComponent},
                            {path : 'supplier-management', component : SupplierManagementComponent}
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