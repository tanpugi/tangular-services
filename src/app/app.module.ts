import { NgtServicesModule } from './services/ngt-services.module';
import { TestModule } from './test/test.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgtServices } from './services/ngt.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TestModule,
    NgtServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
