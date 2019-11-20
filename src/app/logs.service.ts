import { Injectable } from '@angular/core';
import {Log} from "../app/shared/models/log";
import { Observable, of } from 'rxjs';

import {MOCKLOG} from "../app/mocks/mocklog";
import { log } from 'util';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }


  //Homepage
  getLogs(): Observable<Log[]> {
   
    return of(MOCKLOG);
  }

  addtoLog(description:String,): void{
    let date = new Date();
    
    let log: Log = {
      description: description,
      date : date.toDateString(),
      time:date.toTimeString()
      
    }
    MOCKLOG.push(log);
  }
}
