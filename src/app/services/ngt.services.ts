import { Injectable } from '@angular/core';
import { NgtEventRegisterService } from './ngt-event-register.service';

@Injectable()
export class NgtServices {

  private eventRegisterService: NgtEventRegisterService = new NgtEventRegisterService();

  constructor(){
    console.log("Ngt");
  } 

  public eventRegister(): NgtEventRegisterService {
    return this.eventRegisterService;
  }
}