import { NgtServices } from './../services/ngt.services';
import { Component, OnInit, ElementRef, AfterViewInit, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'test2-root',
  template: `
    <button (click)="click()">CLICK</button>
  `
})
export class Test2Component implements OnInit {

  constructor(private ngtServices: NgtServices) { }
  
  ngOnInit() {
    this.ngtServices.eventRegister().getEvent("2").subscribe(
      (msg) => {
        console.log(msg);
      }
    )
  }

  click() {
    this.ngtServices.eventRegister().getEvent("2").next("TESTING2");
  }
}
