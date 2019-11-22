import { Component, OnInit } from '@angular/core';
import { Division } from '../shared/models/Division';
import { ActivatedRoute, Router } from '@angular/router';
import { DivisionService } from '../division.service';
import { Action } from '../shared/models/procedures';
import { ProcedureService } from '../procedures.service';

@Component({
  selector: 'app-procedures-division',
  templateUrl: './procedures-division.component.html',
  styleUrls: ['./procedures-division.component.css']
})
export class ProceduresDivisionComponent implements OnInit {

  isEdit : boolean;
  id:number;
  division : Division;
  title :String;
  info = [] 
  width : number;
  height : number;
  selectedActions :Action[];
  constructor(private route : ActivatedRoute, private divisionService: DivisionService,private proceduresService: ProcedureService, private router : Router) {

  this.isEdit = false;
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    this.getDivision(id);
    let dActionId = this.route.snapshot.paramMap.get("action");

    if(dActionId){
      this.isEdit = true;
      this.selectedActions = this.proceduresService.getActionsOf(+dActionId);
    }else{
      this.isEdit = false;
    this.proceduresService.newDivisionAction(this.division.title,this.division);
    this.selectedActions = this.proceduresService.getActions();
    }
   
  }
  getDivision(id:number):void{
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division; 
       
        this.info = division.info;
        this.title = division.title;
       
      
        const maxarea = 800; //Maximum area of the division
        //Should it be maximum height?

        this.width = Math.abs(division.layout.to.x -division.layout.from.x);
        this.height = Math.abs(division.layout.to.y -division.layout.from.y);

        let area = this.width* this.height;

        let ratio = maxarea/area;

        this.width *= Math.sqrt(ratio);
        this.height *= Math.sqrt(ratio)

       }
    );
  }
  saveDivAction():void{
    this.router.navigate(["/proceduresManagement"]);
  }
  cancel(): void{
    if(!this.isEdit){
      this.proceduresService.deleteDivisionAction();
    }
    this.router.navigate(["/proceduresManagement"]);
  }
}
