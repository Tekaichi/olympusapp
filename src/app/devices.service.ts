import { Injectable } from '@angular/core';
import { SystemDevice, Device } from './shared/models/device';
import { Observable, of } from 'rxjs';
import {Devices, MOCKDIVISION} from '../app/mocks/mockdivision';
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
    let id = division.devices.length;
    device.id = id;
    division.devices.push(device);
    
  }
  getDevice(divisionId:number, deviceId:number){

    return MOCKDIVISION[divisionId].devices[deviceId];
  }
  stateChange(device:Device):void{

    device.show = true;
    setTimeout(()=>{
    device.show = false;
    },10000);
  }
  //Execute action of device -- needed to integrate with a backend

}
