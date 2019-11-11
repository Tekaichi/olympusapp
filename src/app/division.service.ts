import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Info} from "../app/shared/models/info";
import { sharedStylesheetJitUrl } from '@angular/compiler';
import {INFOES} from "../app/mocks/mockinfo";
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }


  getInfo(): Observable<Info[]>{
    return of(INFOES);
  }
}
