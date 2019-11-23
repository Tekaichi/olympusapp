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

  isEdit : boolean; //If this division action is being edited
  id:number;
  division : Division;
  title :String;
  info = [] 
  width : number;
  height : number;
  selectedActions :Action[];
  ratio : number;
  isProcedureEdit : boolean; //If the whole procedure is being edited
  constructor(private route : ActivatedRoute, private divisionService: DivisionService,private proceduresService: ProcedureService, private router : Router) {

 
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    this.getDivision(id);
    let dActionId = this.route.snapshot.paramMap.get("action");
    
    let size = this.route.snapshot.url.length;
    
   if(this.route.snapshot.url[size-1].toString() == 'edit'){
    
     this.isProcedureEdit = true;
   }else{
     this.isProcedureEdit = false;
   }
     
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

        let ratio = Math.sqrt(maxarea/area);
        this.ratio = ratio;
        this.width *= ratio;
        this.height *= ratio;

       }
    );
  }
  saveDivAction():void{
    if(this.isProcedureEdit){
      this.router.navigate(["/proceduresManagement",this.proceduresService.getProcedure().id]);
    }else{
    this.router.navigate(["/proceduresManagement"]);
    }
  }
  cancel(): void{
    if(!this.isEdit){
      this.proceduresService.deleteDivisionAction();
    }
    if(this.isProcedureEdit){
      this.router.navigate(["/proceduresManagement",this.proceduresService.getProcedure().id]);
    }else{
    this.router.navigate(["/proceduresManagement"]);
    }
  }

  removeField(index: number) {
    this.selectedActions.splice(index, 1);
  }

  trackByFn(i: number) {
    return i;
  }
}
