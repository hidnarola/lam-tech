import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HomeLayoutModule } from './home-layout/home-layout.module';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LendingLayoutModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
