import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Device } from '../shared/models/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})
export class DeviceComponent implements OnInit {

  @Input()
  device : Device;
  state : number;
  constructor() { 
     this.state = 0;
     console.log(this.state);
  }

  getStateImage(): String{
    return this.device.device.states[this.state].image;
  }
  ngOnInit() {
   
  }

  openFunctions() : void {
    //Open the modal thing to execute(run) them functions
  }
}
