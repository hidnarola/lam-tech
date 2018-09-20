import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LendingLayoutComponent } from './lending-layout.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LendingLayoutComponent,
                children: [
                    {path: '', component: HomeComponent}
                ]
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
        ])
    ],
    exports: [RouterModule]
})
export class LendingLayoutRoutingModule { }

