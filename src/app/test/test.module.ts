import { NgtServices } from './../services/ngt.services';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { NgtServicesModule } from './../services/ngt-services.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    NgtServicesModule
  ],
  exports: [
    Test1Component,
    Test2Component
  ]
})
export class TestModule {

}