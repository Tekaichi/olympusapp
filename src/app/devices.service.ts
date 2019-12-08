import { Injectable } from '@angular/core';
import { SystemDevice, Device } from './shared/models/device';
import { Observable, of } from 'rxjs';
import {Devices, MOCKDIVISION} from '../app/mocks/mockdivision';
import { Division } from './shared/models/Division';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  
  constructor(private httpClient: HttpClient) { }


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
    //Update state server
    let init = device.currentState.image;
    setTimeout(()=>{
    if(device.currentState.image == init){
      device.show = false;
    }
    },10000);

    
  }

  loopCheckChanges():void{
    this.checkChanges();
    setTimeout(()=>{
      this.checkChanges();
      this.loopCheckChanges();
    },5000);
  }

  checkChanges(): void{
    

    
    MOCKDIVISION.forEach((division) =>{
      division.devices.forEach((device) =>{


        //if(device.position != pos)
        //Get imageURL and pos

       
        let imageURL;
        if(device.currentState.image != imageURL){
          
          let states = device.device.states;

          states.forEach((state)=>{
            if(state.image == imageURL){
              device.currentState = state;
              device.show = false;
              this.stateChange(device);
            }
          })
        }
       
      });
    })
  }

}
