import { Injectable } from '@angular/core';
import {Procedure} from "../app/shared/models/procedures";
import { Observable, of } from 'rxjs';
import {MOCKPROCEDURES} from "../app/mocks/mockprocedures";
@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor() { }


  //Homepage
  getProcedures(): Observable<Procedure[]> {
   
    //Return all Procedures
    return of(MOCKPROCEDURES);
  }

  getTopProcedures(): Observable<Procedure[]>{
    
    //Retrieve the most used. TODO
    return of(MOCKPROCEDURES);
  }
}
