import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Device, State } from '../shared/models/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})
export class DeviceComponent implements OnInit {

  @Input()
  device : Device;
  currentState : State;
  constructor() { 
 
    //this.currentState = this.device.device.states[0];
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
    //Add feedback to notification thingie
  }

  
}
