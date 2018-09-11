import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LendingLayoutComponent } from './lending-layout.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: '', component: LendingLayoutComponent,
                children: [
                    {
                        path: '', component: HomeComponent,
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class LendingLayoutRoutingModule { }

