import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { SuppemployesComponent } from './suppemployes/suppemployes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplyeeComponent,
    SuppemployesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
