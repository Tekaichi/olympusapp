import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Info} from "../app/shared/models/info";
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }


  getInfo(): Observable<Info[]>{
    return of([]);
  }
}
