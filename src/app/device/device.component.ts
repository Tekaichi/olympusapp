import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Device } from '../shared/models/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  template: '<span style=position:absolute;top:{{device.position.y}}vw;left:{{device.position.x}}vw;>{{device.name}}</span>'

})
export class DeviceComponent implements OnInit {

  //Should be an input or something like that. The template is unfinished.
  device : Device ={
    name :"Lampada",
    position :{
      x:0,
      y:0
    },
    url:"",
    device:null
  };
  
  constructor() { 

  }

  ngOnInit() {
   
  }

}
