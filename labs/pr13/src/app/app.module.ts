import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';
import { App6Component } from './app6/app6.component';
import { App1Component } from './app1/app1.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    App3Component,
    App4Component,
    App5Component,
    App6Component,
    App1Component
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
