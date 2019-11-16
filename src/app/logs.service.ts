import { Injectable } from '@angular/core';
import {Log} from "../app/shared/models/log";
import { Observable, of } from 'rxjs';

import {MOCKLOG} from "../app/mocks/mocklog";
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }


  //Homepage
  getLogs(): Observable<Log[]> {
   
    return of(MOCKLOG);
  }
}
