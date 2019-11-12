import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Info} from "../app/shared/models/info";
import {Division} from "../app/shared/models/Division";

import { sharedStylesheetJitUrl } from '@angular/compiler';
import {MOCKDIVISION} from "../app/mocks/mockdivision";
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }



  getDivision(id:number): Observable<Division>{


    return of(MOCKDIVISION);
  }

  //Homepage
  //getDivisions() 
}
