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
  constructor(private httpClient: HttpClient) { }




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
  
  add(device: Device, division: Division){
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
      this.httpClient.post(url_,model,this.httpOptions).subscribe();


    
    
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
    this.httpClient.post(fullURL,{position:{ x:x, y:y}}).subscribe();
  }
  getDevice(divisionId:number, deviceId:number){

    let treturn;
    MOCKDIVISION.forEach((division)=> {
      
   
      if(division.id == divisionId){
        division.devices.forEach((device) => {
          if(device.id == deviceId){
            treturn = device;
            return;
          }
        })
      };
    });
    
    
    return treturn;
  }
  stateChange(device:Device):void{

    device.show = true;
  
    let fullURL = this.url + "divisions/"+device.divisionID+"/change/"+device.id;
    this.httpClient.post(fullURL,{image:device.currentState.image},this.httpOptions).subscribe(); //Not quite like this, but it should work anyway
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
          let device = this.getDevice(+key,+d_key);
        
          let imageURL = sdevice.image
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
         
          ///console.log(sdevice.position.x,device.position.x)
          if(sdevice.position.x != device.position.x  || sdevice.position.y != device.position.y){
           // device.position = sdevice.position;
          }
          
          
        });
     
     
      
      
      
        
      })
     
       
      
      
    });
   
  
 }
    
    
  

}
