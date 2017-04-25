import { NgtServices } from './../services/ngt.services';
import { Component, OnInit, ElementRef, AfterViewInit, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'test1-root',
  template: `
    <button (click)="click()">CLICK</button>
  `
})
export class Test1Component implements OnInit {

  constructor(private ngtServices: NgtServices) { }
  
  ngOnInit() {
    this.ngtServices.eventRegister().getEvent("1").subscribe(
      (msg) => {
        console.log(msg);
      }
    )
  }

  click() {
    this.ngtServices.eventRegister().getEvent("1").next("TESTING1!!!");
  }
}
