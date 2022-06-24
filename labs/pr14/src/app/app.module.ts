import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';
import { App6Component } from './app6/app6.component';
import { App7Component } from './app7/app7.component';
import { App8Component } from './app8/app8.component';
import { App9Component } from './app9/app9.component';
import { App10Component } from './app10/app10.component';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    App3Component,
    App4Component,
    App5Component,
    App6Component,
    App7Component,
    App8Component,
    App9Component,
    App10Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
