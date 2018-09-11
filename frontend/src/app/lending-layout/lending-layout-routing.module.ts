import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LendingLayoutComponent } from './lending-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: '', component: LendingLayoutComponent,
                children: [
                    {
                        path: '', component: HomeComponent,
                    },
                    { path : 'about_us' , component : AboutUsComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class LendingLayoutRoutingModule { }

