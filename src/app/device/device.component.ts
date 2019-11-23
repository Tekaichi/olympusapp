import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Device, State } from '../shared/models/device';
import { LogService } from '../logs.service';
import { Division } from '../shared/models/Division';
import { AlertService } from '../_alert';
import { DevicesService } from '../devices.service';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})
export class DeviceComponent implements OnInit {

  
  @Input()
  division : Division;
  @Input()
  device : Device;
  currentState : State;
  constructor(private logService :LogService,private alertService : AlertService,private deviceService : DevicesService) { 
 
 
  }

 
  ngOnInit() {
   
  
    this.currentState = this.device.currentState;
  }

  changeState(state:State):void{

    this.device.device.states.forEach((check) =>{

      if(check.description == state.description){
        console.log(state.description,check.description);
        
        this.currentState = check;
        this.device.currentState = check;
        this.logService.addtoLog(this.device.name + " was " + this.currentState.action + " in " + this.division.title);
        //Add feedback to notification thingie
    
        this.alertService.success(this.device.name + " was " + this.currentState.action);
       
        this.deviceService.stateChange(this.device);
        return;
      }
    })

   
 
    
  }

  
}
