import { Component, OnInit, Input } from '@angular/core';
import { Division } from '../shared/models/Division';
import { Device, State } from '../shared/models/device';
import { LogService } from '../logs.service';
import { ProcedureService } from '../procedures.service';
import { DivisionActions } from '../shared/models/procedures';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-proceduredevice',
  templateUrl: './proceduredevice.component.html',
  styleUrls: ['./proceduredevice.component.css']
})
export class ProceduredeviceComponent implements OnInit {

  @Input()
  division : Division;
  @Input()
  device : Device;
  currentState : State;
  dAction : DivisionActions;
  constructor(private proceduresService: ProcedureService) { 
 
 
   
   
  }

  getStateImage(): String{
    return this.currentState.image;
    
  }
  ngOnInit() {
   
  
    this.currentState = this.device.currentState;
  }

    setState(state:State):void{
   

      this.proceduresService.addAction({
        device: this.device,
        goalState :state
      });
  

   
  }

}
