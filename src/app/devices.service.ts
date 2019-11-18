import { Injectable } from '@angular/core';
import { SystemDevice } from './shared/models/device';
import { Observable, of } from 'rxjs';
import {Devices} from '../app/mocks/mockdivision';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  
  constructor() { }


  getKnownDeviceTypes(): Observable<SystemDevice[]>{
    
    return of(Devices)
  }

  //Execute action of device
  //Check if the device model is ok for this thing
}
