import { Component, OnInit } from '@angular/core';


import { DeleteProcedureService } from './delete-procedure/delete-procedure.service';
import {Procedure} from '../shared/models/procedures';
import { MOCKPROCEDURES } from '../mocks/mockprocedures';
import { Router } from '@angular/router';
import { ProcedureService } from '../procedures.service';
import { DevicesService } from '../devices.service';


@Component({
  selector: 'app-procedures-main',
  templateUrl: './procedures-main.component.html',
  styleUrls: ['./procedures-main.component.css']
})

export class ProceduresMainComponent implements OnInit {
  procedures: Procedure[]
  constructor(private deleteProcedureComponent: DeleteProcedureService, private router:Router, private proceduresService : ProcedureService,private devicesService : DevicesService) {
   
   

  }
  
  public openDeleteConfirmation() {
    this.deleteProcedureComponent.confirm('Please confirm..', 'Do you really want to delete this procedure ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  ngOnInit() {
    this.getProcedures(1);
  }

  getProcedures(userId:number): void{
    //Use the procedures service to retrieve the procedures, for now the procedures are defined in the mockprocedures file
    this.procedures = MOCKPROCEDURES; //Placeholder
  }
  createProcedure():void{

  this.router.navigate(["/proceduresManagement"]);
  this.proceduresService.newProcedure();
  }

  run(procedure: Procedure) : void{
    procedure.run(this.devicesService);
  }

  edit(id :number): void{
    
    this.router.navigate(["/proceduresManagement",id]);

  }
}
