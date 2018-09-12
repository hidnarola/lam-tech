import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LendingLayoutComponent } from './lending-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FinanceSolutionsComponent } from './finance-solutions/finance-solutions.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CountriesComponent } from './countries/countries.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LendingLayoutComponent,
                children: [
                    {path: '', component: HomeComponent},
                    { path : 'about_us' , component : AboutUsComponent },
                    {path : 'finance_solutions', component : FinanceSolutionsComponent},
                    {path : 'how_it_works', component : HowItWorksComponent},
                    {path : 'countries', component : CountriesComponent}
                ]
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
        ])
    ],
    exports: [RouterModule]
})
export class LendingLayoutRoutingModule { }

