import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/Division';
import { Router } from '@angular/router';
import { DivisionActions } from '../shared/models/procedures';
import { ProcedureService } from '../procedures.service';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-procedurespage',
  templateUrl: './procedurespage.component.html',
  styleUrls: ['./procedurespage.component.css']
})
export class ProcedurespageComponent implements OnInit {
  actions: DivisionActions[]
  divisions : Division[]
  name:string;
  constructor(private divisionService : DivisionService, private router : Router,private proceduresService : ProcedureService,private alert : AlertService) { 

    
  }

  ngOnInit() {
    this.divisionService.getDivisions().subscribe((divisions) =>{
      this.divisions = divisions;
    })
    this.actions = this.proceduresService.getDivisionActions();
  }
  goToDivision(id: number) : void{
    this.router.navigate(['/divisionprocedures', id]);
  }

  save():void{
    
    this.proceduresService.save(this.name);
    this.router.navigate(['/procedures']);

    this.alert.success("Procedure "+ this.name +" was added successfully");


  }
  cancel():void{
    this.proceduresService.cancel();
  }
}
