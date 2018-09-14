import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CowSetupComponent } from './cow-setup.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                children: [
                    {path : 'company_details', component : CompanyDetailsComponent}
                ]
            },
            { path: '', redirectTo: 'company_details', pathMatch: 'full' },
        ])
    ],
    exports: [RouterModule]
})
export class CowSetupRoutingModule { }