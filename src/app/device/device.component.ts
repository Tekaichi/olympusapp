import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Device, State } from '../shared/models/device';
import { LogService } from '../logs.service';
import { Division } from '../shared/models/Division';

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
  constructor(private logService :LogService) { 
 
 
  }

  getStateImage(): String{
    return this.currentState.image;
    
  }
  ngOnInit() {
   
  
    this.currentState = this.device.currentState;
  }

  changeState(state:State):void{
    this.currentState = state;
    this.device.currentState = state;
    this.logService.addtoLog(this.device.name + " was " + this.currentState.action + " in " + this.division.title);
    //Add feedback to notification thingie
  }

  
}
