import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  //observable 
  private dataObservable !: Observable<string>;
  //subject
  private dataSubject = new Subject<string>();

  private dataBehaviourSubject = new BehaviorSubject<string>('intional value');

  private dataREplaySubject = new ReplaySubject<string>(3);

  private dataAsyncSubject = new AsyncSubject<string>();


  constructor() {
    this.dataObservable = new Observable((observe) => {
      setTimeout(() => observe.next("the data is the 32300"), 1000);
      setTimeout(() => observe.next("the data is the secound responce"), 2000);
      setTimeout(() => observe.complete(), 3000);
    });
  }

  /**
   * 
   * @returns get the value for the observable
   */
  getDataObserve(): Observable<string> {
    return this.dataObservable;
  }

  /**
   * 
   * @returns get the value for the subject
   */
  getDataSubject(): Observable<string> {
    return this.dataSubject
  }


  /**
   * 
   * @param value 
   * @returns 
   */
  emitDataValue(value: string): void {
    return this.dataSubject.next(value);
  }

  getBehaviorSubject() {
    return this.dataBehaviourSubject.asObservable();
  }


  getReplaySubject() {
    return this.dataREplaySubject.asObservable();
  }


  getAsyncSubject() {
    return this.dataAsyncSubject.asObservable();
  }

  emitBehaviorSubject(value: any) {
    return this.dataBehaviourSubject.next(value)
  }

  emitReplaySubject(value: any) {
    return this.dataREplaySubject.next(value)
  }

  emitAsyncSubject(value: any) {
    return this.dataAsyncSubject.next(value)
  }

  completeAsyncSubject() {
    return this.dataAsyncSubject.complete();
  }
}
