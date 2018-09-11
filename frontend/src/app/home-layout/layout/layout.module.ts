import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from '../layout/layout.component';
@NgModule({
  imports: [
   
  ],
  declarations: [HeaderComponent,FooterComponent, LayoutComponent],
  providers : [],
  exports : [LayoutComponent]
})
export class LayoutModule { }