import { Injectable, ɵConsole } from '@angular/core';
import { SystemDevice, Device } from './shared/models/device';
import { Observable, of } from 'rxjs';
import {Devices, MOCKDIVISION} from '../app/mocks/mockdivision';
import { Division } from './shared/models/Division';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerDivision, ServerDevice } from './shared/serverModels/models';
import { tap, catchError } from 'rxjs/operators';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';
import { LogService } from './logs.service';
import { AlertService } from './_alert';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  url:string = "https://olympusbe.herokuapp.com/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  constructor(private httpClient: HttpClient,private logService : LogService,private alertService: AlertService) { }




  pushServer(){
   return;
   let index = 0;

    let url_ = this.url + "divisions"
    MOCKDIVISION.forEach((division)=>{
      let devices = []
   
      division.devices.forEach((device) =>{

        let model :ServerDevice  = {
          id: device.id,
          name:device.name,
          url : device.url,
          image: device.currentState.image,
          device: device.device.type,
          position :{
            x: device.position.x,
            y: device.position.y
          }

        }

        devices.push(model)
      });

      
      this.httpClient.post(url_,{id:index,devices:devices},this.httpOptions).subscribe();

        
      index++;
    })
  }

  getKnownDeviceTypes(): Observable<SystemDevice[]>{
    
    return of(Devices)
  }
  
  add(device: Device, division: Division,broadcast = true){
    let id = division.devices.length;
    device.id = id;
    device.divisionID = division.id;
    division.devices.push(device);
   
    let model :ServerDevice  = {
        id: device.id,
        name:device.name,
        url : device.url,
        image: device.currentState.image,
        device: device.device.type,
        position :{
          x: device.position.x,
          y: device.position.y
        }

      }
      let url_ = this.url + "divisions/" + device.divisionID;
      if(broadcast){
      this.httpClient.post(url_,model,this.httpOptions).subscribe();
      }

    
    
  }

  deleteDevice(todelete:Device,broadcast = true){
    MOCKDIVISION.forEach((division)=> {
      

      if(division.id == todelete.divisionID){

        for(let i = 0; i< division.devices.length;i++){

          if(division.devices[i].id == todelete.id){
            division.devices.splice(i,1);
            let url_= this.url + "divisions/"+ division.id+"/"+ i;
            if(broadcast){
             this.httpClient.delete(url_).subscribe();
            }
            return;
          }
        }
      }});

  }
  moveDevice(device:Device){
    let fullURL = this.url + "divisions/"+device.divisionID+"/move/"+device.id;
    let x = device.position.x;
    let y = device.position.y;

    this.httpClient.post(fullURL,{ x:x, y:y}).subscribe();
  }
  getDevice(divisionId:number, deviceId:number){

    for(let i = 0; i < MOCKDIVISION.length;i++){

      let division = MOCKDIVISION[i];
      if(division.id == divisionId){
        for(let j = 0; j < division.devices.length;j++){
          let device = division.devices[j];
          if(device.id == deviceId){
            return device;
          }
        }
      }
    }
    return null;
  }
  stateChange(device:Device,broadcast = true):void{

    device.show = true;
  
    let fullURL = this.url + "divisions/"+device.divisionID+"/change/"+device.id;
    if(broadcast){
    this.httpClient.post(fullURL,{image:device.currentState.image},this.httpOptions).subscribe(); 
    }//Not quite like this, but it should work anyway
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
    
    this.httpClient.get<ServerDivision[]>(this.url+"divisions").pipe().subscribe( divisions => {

      
     
      let keys = Object.keys(divisions);
     
     
      keys.forEach((key) =>{
        let division = divisions[key];
      

        let device_keys = Object.keys(division.devices);


        if(device_keys.length < MOCKDIVISION[+key].devices.length){
          MOCKDIVISION[+key].devices.forEach((device)=>{
               if(!device_keys.includes(device.id.toString())){
                this.deleteDevice(device,false);
               }
          })
        }
         
       
      
        device_keys.forEach( (d_key) => {

          let sdevice = division.devices[d_key];
          
          let device  :Device= this.getDevice(+key,+d_key);
          if(device == null){
            device = {
              url :sdevice.url,
              name :sdevice.name,
              divisionID : +key,
              position: {
                x: sdevice.position.x,
                y:sdevice.position.y
              },
              id:sdevice.id,
              show:false,
              device: this.getDeviceType(sdevice.device),
              currentState:null



            }
            device.currentState = device.device.states[0];
            this.add(device,MOCKDIVISION[+key],false);
          }
          let imageURL = sdevice.image;
          
          if(device.currentState.image != imageURL){
            let states = device.device.states;
  
            states.forEach((state)=>{
              if(state.image == imageURL){
                device.currentState = state;
                device.show = false;
                this.stateChange(device,false);
                this.logService.addtoLog(device.name + " was " + device.currentState.action + " in " + MOCKDIVISION[+key].title);
    
                this.alertService.success(device.name + " was " + device.currentState.action);
              
              }
            })
          }
         
          device.position.x = sdevice.position.x;
          device.position.y = sdevice.position.y;
          
          
        });
     
     
      
      
      
        
      })
     
       
      
      
    });
   
  
 }
    
    
 getDeviceType(type:string): SystemDevice{

  for(let i = 0; i < Devices.length;i++){
    if(Devices[i].type == type){
      return Devices[i];
    }
  }
  return null;
 }
  

}
