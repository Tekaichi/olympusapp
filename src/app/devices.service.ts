import { Injectable } from '@angular/core';
import { SystemDevice, Device } from './shared/models/device';
import { Observable, of } from 'rxjs';
import {Devices} from '../app/mocks/mockdivision';
import { Division } from './shared/models/Division';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  
  constructor() { }


  getKnownDeviceTypes(): Observable<SystemDevice[]>{
    
    return of(Devices)
  }
  
  add(device: Device, division: Division){
    division.devices.push(device);
    console.log(division);
  }
  //Execute action of device
  //Check if the device model is ok for this thing
}
