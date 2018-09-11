import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LayoutModule } from './layout/layout.module'; 
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component : LayoutComponent,
        children: [
          {path : '', component : HomeComponent}
        ]
      }
    ])
  ],
  declarations: [HomeComponent],
  providers : [],
  exports : []
})
export class HomeLayoutModule { }