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

  stateChange(device:Device):void{

    device.show = true;
    setTimeout(()=>{
    device.show = false;
    },4000);
  }
  //Execute action of device -- needed to integrate with a backend

}
