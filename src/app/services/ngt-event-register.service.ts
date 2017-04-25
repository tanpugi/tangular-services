import { Subject } from 'rxjs/Subject'; 

export class NgtEventRegisterService {
  private eventMap: Subject<any>[] = [];

  constructor() {}

  public getEvent(eventId: string): Subject<any> {
    if (!this.eventMap[eventId]) {
      this.eventMap[eventId] = new Subject<any>();
    }
    return this.eventMap[eventId];
  }
}