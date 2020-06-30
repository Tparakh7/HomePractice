import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerssComponent } from './serverss/serverss.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServerssComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
