import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/Division';
import { Router, ActivatedRoute } from '@angular/router';
import { DivisionActions, Procedure } from '../shared/models/procedures';
import { ProcedureService } from '../procedures.service';
import { AlertService } from '../_alert';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-procedurespage',
  templateUrl: './procedurespage.component.html',
  styleUrls: ['./procedurespage.component.css']
})
export class ProcedurespageComponent implements OnInit {
  actions: DivisionActions[]
  divisions : Division[]
  name:string;
  isEdit : boolean;
  procedure :Procedure;
  constructor(private divisionService : DivisionService, private router : Router,private proceduresService : ProcedureService,private alert : AlertService,private route : ActivatedRoute) { 


    
  }

  ngOnInit() {
    this.divisionService.getDivisions().subscribe((divisions) =>{
      this.divisions = divisions;
    })

    
    let id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.actions = this.proceduresService.getDivisionActionsOf(+id);
   
      this.isEdit = true;
     
    }else{
     
      this.isEdit = false;
      this.actions = this.proceduresService.getDivisionActions();

    }
    this.procedure = this.proceduresService.getProcedure(); //shallow copy needed so the cancel does something
    this.name = this.proceduresService.getProcedure().name;
  }
  goToDivision(id: number) : void{
    if(this.isEdit){
      this.router.navigate(['/divisionprocedures', id,"edit"]);

    }else{
    this.router.navigate(['/divisionprocedures', id]);
    }
  }

  save():void{
    var name = this.name;
    
    this.router.navigate(['/procedures']);
    
    if(this.isEdit){
      
      this.alert.success("Procedure "+ name +" was edited successfully");

    }else{
    this.alert.success("Procedure "+ name +" was added successfully");
    this.proceduresService.save(name);
    }
    
  }
  cancel():void{
    if(!this.isEdit){
    this.proceduresService.cancel();
    }
    this.router.navigate(['/procedures']);
    }

  edit(id: number){
    let dAction = this.proceduresService.getDivisionAction(id);
    if(this.isEdit){
      this.router.navigate(['/divisionprocedures', dAction.division.id,"edit",dAction.id,"edit"]);

    }else{
      this.router.navigate(['/divisionprocedures', dAction.division.id,"edit",dAction.id]);
    }
    
  }
}
