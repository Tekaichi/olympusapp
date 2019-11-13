import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Division} from "../app/shared/models/Division";

import {MOCKDIVISION} from "../app/mocks/mockdivision";
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }



  getDivision(id:number): Observable<Division>{

    return of(MOCKDIVISION[id]);
  }

  //Homepage
  //getDivisions() 
}
